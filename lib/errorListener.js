const {ErrorListener} = require('antlr4/error');

class SHRErrorListener extends ErrorListener {
  constructor(bunyanLogger) {
    super();
    this._logger = bunyanLogger;
  }

  codeMessage(msg) {
    var code;

    if (msg.match(/^extraneous input .+ expecting/)) {
      code = 1123;
    } else if (msg.match(/^mismatched input .+ expecting/)) {
      code = 1116;
    } else if (msg.match(/^token recognition error at: '.+'/)) {
      code = 1115;
    } else {
      return msg;
    }
    
    msg = `${msg}. ERROR_CODE:${code}`
    return msg;
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    this._logger.error({line, column}, this.codeMessage(msg));
  }
}

module.exports = {SHRErrorListener};
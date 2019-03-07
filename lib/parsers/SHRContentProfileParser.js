// Generated from SHRContentProfileParser.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SHRContentProfileParserListener = require('./SHRContentProfileParserListener').SHRContentProfileParserListener;
var SHRContentProfileParserVisitor = require('./SHRContentProfileParserVisitor').SHRContentProfileParserVisitor;

var grammarFileName = "SHRContentProfileParser.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3\23^\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t",
    "\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4",
    "\21\t\21\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\4\3\4\3\4\7\4-\n\4\f\4\16\4\60",
    "\13\4\3\5\3\5\3\5\3\6\6\6\66\n\6\r\6\16\6\67\3\7\3\7\3\7\3\b\3\b\3\b",
    "\3\t\7\tA\n\t\f\t\16\tD\13\t\3\n\3\n\3\n\3\13\6\13J\n\13\r\13\16\13",
    "K\3\f\3\f\3\r\3\r\3\r\3\r\3\16\3\16\3\17\3\17\3\20\3\20\3\21\3\21\5",
    "\21\\\n\21\3\21\2\2\22\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \2\4\3",
    "\2\f\r\3\2\n\fR\2\"\3\2\2\2\4%\3\2\2\2\6.\3\2\2\2\b\61\3\2\2\2\n\65",
    "\3\2\2\2\f9\3\2\2\2\16<\3\2\2\2\20B\3\2\2\2\22E\3\2\2\2\24I\3\2\2\2",
    "\26M\3\2\2\2\30O\3\2\2\2\32S\3\2\2\2\34U\3\2\2\2\36W\3\2\2\2 [\3\2\2",
    "\2\"#\5\4\3\2#$\5\6\4\2$\3\3\2\2\2%&\7\3\2\2&\'\7\4\2\2\'(\5\30\r\2",
    "(\5\3\2\2\2)*\5\b\5\2*+\5\n\6\2+-\3\2\2\2,)\3\2\2\2-\60\3\2\2\2.,\3",
    "\2\2\2./\3\2\2\2/\7\3\2\2\2\60.\3\2\2\2\61\62\7\5\2\2\62\63\5\32\16",
    "\2\63\t\3\2\2\2\64\66\5\f\7\2\65\64\3\2\2\2\66\67\3\2\2\2\67\65\3\2",
    "\2\2\678\3\2\2\28\13\3\2\2\29:\5\16\b\2:;\5\20\t\2;\r\3\2\2\2<=\5 \21",
    "\2=>\7\b\2\2>\17\3\2\2\2?A\5\22\n\2@?\3\2\2\2AD\3\2\2\2B@\3\2\2\2BC",
    "\3\2\2\2C\21\3\2\2\2DB\3\2\2\2EF\5 \21\2FG\5\24\13\2G\23\3\2\2\2HJ\5",
    "\26\f\2IH\3\2\2\2JK\3\2\2\2KI\3\2\2\2KL\3\2\2\2L\25\3\2\2\2MN\7\6\2",
    "\2N\27\3\2\2\2OP\7\t\2\2PQ\7\7\2\2QR\7\t\2\2R\31\3\2\2\2ST\t\2\2\2T",
    "\33\3\2\2\2UV\t\3\2\2V\35\3\2\2\2WX\7\16\2\2X\37\3\2\2\2Y\\\5\34\17",
    "\2Z\\\5\36\20\2[Y\3\2\2\2[Z\3\2\2\2\\!\3\2\2\2\7.\67BK["].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'Grammar:'", "'ContentProfile'", "'Namespace:'", 
                     "'MS'", "'.'", "':'", 'null', 'null', 'null', 'null', 
                     'null', 'null', 'null', 'null', "'\n'" ];

var symbolicNames = [ 'null', "KW_GRAMMAR", "KW_G_CONTENT_PROFILE", "KW_NAMESPACE", 
                      "KW_MUST_SUPPORT", "DOT", "COLON", "WHOLE_NUMBER", 
                      "ALL_CAPS", "UPPER_WORD", "LOWER_WORD", "DOT_SEPARATED_LW", 
                      "DOT_SEPARATED_UW", "STRING", "WS", "NEWLINE", "COMMENT", 
                      "LINE_COMMENT" ];

var ruleNames =  [ "doc", "docHeader", "contentsDefs", "namespaceHeader", 
                   "contentDefs", "contentDef", "contentHeader", "fields", 
                   "field", "flags", "flag", "version", "namespace", "simpleName", 
                   "pathName", "simpleOrPathName" ];

function SHRContentProfileParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SHRContentProfileParser.prototype = Object.create(antlr4.Parser.prototype);
SHRContentProfileParser.prototype.constructor = SHRContentProfileParser;

Object.defineProperty(SHRContentProfileParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SHRContentProfileParser.EOF = antlr4.Token.EOF;
SHRContentProfileParser.KW_GRAMMAR = 1;
SHRContentProfileParser.KW_G_CONTENT_PROFILE = 2;
SHRContentProfileParser.KW_NAMESPACE = 3;
SHRContentProfileParser.KW_MUST_SUPPORT = 4;
SHRContentProfileParser.DOT = 5;
SHRContentProfileParser.COLON = 6;
SHRContentProfileParser.WHOLE_NUMBER = 7;
SHRContentProfileParser.ALL_CAPS = 8;
SHRContentProfileParser.UPPER_WORD = 9;
SHRContentProfileParser.LOWER_WORD = 10;
SHRContentProfileParser.DOT_SEPARATED_LW = 11;
SHRContentProfileParser.DOT_SEPARATED_UW = 12;
SHRContentProfileParser.STRING = 13;
SHRContentProfileParser.WS = 14;
SHRContentProfileParser.NEWLINE = 15;
SHRContentProfileParser.COMMENT = 16;
SHRContentProfileParser.LINE_COMMENT = 17;

SHRContentProfileParser.RULE_doc = 0;
SHRContentProfileParser.RULE_docHeader = 1;
SHRContentProfileParser.RULE_contentsDefs = 2;
SHRContentProfileParser.RULE_namespaceHeader = 3;
SHRContentProfileParser.RULE_contentDefs = 4;
SHRContentProfileParser.RULE_contentDef = 5;
SHRContentProfileParser.RULE_contentHeader = 6;
SHRContentProfileParser.RULE_fields = 7;
SHRContentProfileParser.RULE_field = 8;
SHRContentProfileParser.RULE_flags = 9;
SHRContentProfileParser.RULE_flag = 10;
SHRContentProfileParser.RULE_version = 11;
SHRContentProfileParser.RULE_namespace = 12;
SHRContentProfileParser.RULE_simpleName = 13;
SHRContentProfileParser.RULE_pathName = 14;
SHRContentProfileParser.RULE_simpleOrPathName = 15;

function DocContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_doc;
    return this;
}

DocContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DocContext.prototype.constructor = DocContext;

DocContext.prototype.docHeader = function() {
    return this.getTypedRuleContext(DocHeaderContext,0);
};

DocContext.prototype.contentsDefs = function() {
    return this.getTypedRuleContext(ContentsDefsContext,0);
};

DocContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterDoc(this);
	}
};

DocContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitDoc(this);
	}
};

DocContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitDoc(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.DocContext = DocContext;

SHRContentProfileParser.prototype.doc = function() {

    var localctx = new DocContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SHRContentProfileParser.RULE_doc);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 32;
        this.docHeader();
        this.state = 33;
        this.contentsDefs();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DocHeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_docHeader;
    return this;
}

DocHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DocHeaderContext.prototype.constructor = DocHeaderContext;

DocHeaderContext.prototype.KW_GRAMMAR = function() {
    return this.getToken(SHRContentProfileParser.KW_GRAMMAR, 0);
};

DocHeaderContext.prototype.KW_G_CONTENT_PROFILE = function() {
    return this.getToken(SHRContentProfileParser.KW_G_CONTENT_PROFILE, 0);
};

DocHeaderContext.prototype.version = function() {
    return this.getTypedRuleContext(VersionContext,0);
};

DocHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterDocHeader(this);
	}
};

DocHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitDocHeader(this);
	}
};

DocHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitDocHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.DocHeaderContext = DocHeaderContext;

SHRContentProfileParser.prototype.docHeader = function() {

    var localctx = new DocHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SHRContentProfileParser.RULE_docHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 35;
        this.match(SHRContentProfileParser.KW_GRAMMAR);
        this.state = 36;
        this.match(SHRContentProfileParser.KW_G_CONTENT_PROFILE);
        this.state = 37;
        this.version();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ContentsDefsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_contentsDefs;
    return this;
}

ContentsDefsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContentsDefsContext.prototype.constructor = ContentsDefsContext;

ContentsDefsContext.prototype.namespaceHeader = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NamespaceHeaderContext);
    } else {
        return this.getTypedRuleContext(NamespaceHeaderContext,i);
    }
};

ContentsDefsContext.prototype.contentDefs = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ContentDefsContext);
    } else {
        return this.getTypedRuleContext(ContentDefsContext,i);
    }
};

ContentsDefsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterContentsDefs(this);
	}
};

ContentsDefsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitContentsDefs(this);
	}
};

ContentsDefsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitContentsDefs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.ContentsDefsContext = ContentsDefsContext;

SHRContentProfileParser.prototype.contentsDefs = function() {

    var localctx = new ContentsDefsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SHRContentProfileParser.RULE_contentsDefs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 44;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRContentProfileParser.KW_NAMESPACE) {
            this.state = 39;
            this.namespaceHeader();
            this.state = 40;
            this.contentDefs();
            this.state = 46;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NamespaceHeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_namespaceHeader;
    return this;
}

NamespaceHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamespaceHeaderContext.prototype.constructor = NamespaceHeaderContext;

NamespaceHeaderContext.prototype.KW_NAMESPACE = function() {
    return this.getToken(SHRContentProfileParser.KW_NAMESPACE, 0);
};

NamespaceHeaderContext.prototype.namespace = function() {
    return this.getTypedRuleContext(NamespaceContext,0);
};

NamespaceHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterNamespaceHeader(this);
	}
};

NamespaceHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitNamespaceHeader(this);
	}
};

NamespaceHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitNamespaceHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.NamespaceHeaderContext = NamespaceHeaderContext;

SHRContentProfileParser.prototype.namespaceHeader = function() {

    var localctx = new NamespaceHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SHRContentProfileParser.RULE_namespaceHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 47;
        this.match(SHRContentProfileParser.KW_NAMESPACE);
        this.state = 48;
        this.namespace();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ContentDefsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_contentDefs;
    return this;
}

ContentDefsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContentDefsContext.prototype.constructor = ContentDefsContext;

ContentDefsContext.prototype.contentDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ContentDefContext);
    } else {
        return this.getTypedRuleContext(ContentDefContext,i);
    }
};

ContentDefsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterContentDefs(this);
	}
};

ContentDefsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitContentDefs(this);
	}
};

ContentDefsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitContentDefs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.ContentDefsContext = ContentDefsContext;

SHRContentProfileParser.prototype.contentDefs = function() {

    var localctx = new ContentDefsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SHRContentProfileParser.RULE_contentDefs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 51; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 50;
            this.contentDef();
            this.state = 53; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRContentProfileParser.ALL_CAPS) | (1 << SHRContentProfileParser.UPPER_WORD) | (1 << SHRContentProfileParser.LOWER_WORD) | (1 << SHRContentProfileParser.DOT_SEPARATED_UW))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ContentDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_contentDef;
    return this;
}

ContentDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContentDefContext.prototype.constructor = ContentDefContext;

ContentDefContext.prototype.contentHeader = function() {
    return this.getTypedRuleContext(ContentHeaderContext,0);
};

ContentDefContext.prototype.fields = function() {
    return this.getTypedRuleContext(FieldsContext,0);
};

ContentDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterContentDef(this);
	}
};

ContentDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitContentDef(this);
	}
};

ContentDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitContentDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.ContentDefContext = ContentDefContext;

SHRContentProfileParser.prototype.contentDef = function() {

    var localctx = new ContentDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SHRContentProfileParser.RULE_contentDef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 55;
        this.contentHeader();
        this.state = 56;
        this.fields();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ContentHeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_contentHeader;
    return this;
}

ContentHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContentHeaderContext.prototype.constructor = ContentHeaderContext;

ContentHeaderContext.prototype.simpleOrPathName = function() {
    return this.getTypedRuleContext(SimpleOrPathNameContext,0);
};

ContentHeaderContext.prototype.COLON = function() {
    return this.getToken(SHRContentProfileParser.COLON, 0);
};

ContentHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterContentHeader(this);
	}
};

ContentHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitContentHeader(this);
	}
};

ContentHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitContentHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.ContentHeaderContext = ContentHeaderContext;

SHRContentProfileParser.prototype.contentHeader = function() {

    var localctx = new ContentHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SHRContentProfileParser.RULE_contentHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 58;
        this.simpleOrPathName();
        this.state = 59;
        this.match(SHRContentProfileParser.COLON);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FieldsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_fields;
    return this;
}

FieldsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldsContext.prototype.constructor = FieldsContext;

FieldsContext.prototype.field = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FieldContext);
    } else {
        return this.getTypedRuleContext(FieldContext,i);
    }
};

FieldsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterFields(this);
	}
};

FieldsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitFields(this);
	}
};

FieldsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitFields(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.FieldsContext = FieldsContext;

SHRContentProfileParser.prototype.fields = function() {

    var localctx = new FieldsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SHRContentProfileParser.RULE_fields);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 64;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 61;
                this.field(); 
            }
            this.state = 66;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_field;
    return this;
}

FieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldContext.prototype.constructor = FieldContext;

FieldContext.prototype.simpleOrPathName = function() {
    return this.getTypedRuleContext(SimpleOrPathNameContext,0);
};

FieldContext.prototype.flags = function() {
    return this.getTypedRuleContext(FlagsContext,0);
};

FieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterField(this);
	}
};

FieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitField(this);
	}
};

FieldContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitField(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.FieldContext = FieldContext;

SHRContentProfileParser.prototype.field = function() {

    var localctx = new FieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SHRContentProfileParser.RULE_field);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        this.simpleOrPathName();
        this.state = 68;
        this.flags();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FlagsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_flags;
    return this;
}

FlagsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FlagsContext.prototype.constructor = FlagsContext;

FlagsContext.prototype.flag = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FlagContext);
    } else {
        return this.getTypedRuleContext(FlagContext,i);
    }
};

FlagsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterFlags(this);
	}
};

FlagsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitFlags(this);
	}
};

FlagsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitFlags(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.FlagsContext = FlagsContext;

SHRContentProfileParser.prototype.flags = function() {

    var localctx = new FlagsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SHRContentProfileParser.RULE_flags);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 70;
            this.flag();
            this.state = 73; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SHRContentProfileParser.KW_MUST_SUPPORT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FlagContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_flag;
    return this;
}

FlagContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FlagContext.prototype.constructor = FlagContext;

FlagContext.prototype.KW_MUST_SUPPORT = function() {
    return this.getToken(SHRContentProfileParser.KW_MUST_SUPPORT, 0);
};

FlagContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterFlag(this);
	}
};

FlagContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitFlag(this);
	}
};

FlagContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitFlag(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.FlagContext = FlagContext;

SHRContentProfileParser.prototype.flag = function() {

    var localctx = new FlagContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, SHRContentProfileParser.RULE_flag);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        this.match(SHRContentProfileParser.KW_MUST_SUPPORT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VersionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_version;
    return this;
}

VersionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VersionContext.prototype.constructor = VersionContext;

VersionContext.prototype.WHOLE_NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRContentProfileParser.WHOLE_NUMBER);
    } else {
        return this.getToken(SHRContentProfileParser.WHOLE_NUMBER, i);
    }
};


VersionContext.prototype.DOT = function() {
    return this.getToken(SHRContentProfileParser.DOT, 0);
};

VersionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterVersion(this);
	}
};

VersionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitVersion(this);
	}
};

VersionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitVersion(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.VersionContext = VersionContext;

SHRContentProfileParser.prototype.version = function() {

    var localctx = new VersionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, SHRContentProfileParser.RULE_version);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 77;
        this.match(SHRContentProfileParser.WHOLE_NUMBER);
        this.state = 78;
        this.match(SHRContentProfileParser.DOT);
        this.state = 79;
        this.match(SHRContentProfileParser.WHOLE_NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NamespaceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_namespace;
    return this;
}

NamespaceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamespaceContext.prototype.constructor = NamespaceContext;

NamespaceContext.prototype.LOWER_WORD = function() {
    return this.getToken(SHRContentProfileParser.LOWER_WORD, 0);
};

NamespaceContext.prototype.DOT_SEPARATED_LW = function() {
    return this.getToken(SHRContentProfileParser.DOT_SEPARATED_LW, 0);
};

NamespaceContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterNamespace(this);
	}
};

NamespaceContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitNamespace(this);
	}
};

NamespaceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitNamespace(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.NamespaceContext = NamespaceContext;

SHRContentProfileParser.prototype.namespace = function() {

    var localctx = new NamespaceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, SHRContentProfileParser.RULE_namespace);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 81;
        _la = this._input.LA(1);
        if(!(_la===SHRContentProfileParser.LOWER_WORD || _la===SHRContentProfileParser.DOT_SEPARATED_LW)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SimpleNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_simpleName;
    return this;
}

SimpleNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimpleNameContext.prototype.constructor = SimpleNameContext;

SimpleNameContext.prototype.UPPER_WORD = function() {
    return this.getToken(SHRContentProfileParser.UPPER_WORD, 0);
};

SimpleNameContext.prototype.ALL_CAPS = function() {
    return this.getToken(SHRContentProfileParser.ALL_CAPS, 0);
};

SimpleNameContext.prototype.LOWER_WORD = function() {
    return this.getToken(SHRContentProfileParser.LOWER_WORD, 0);
};

SimpleNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterSimpleName(this);
	}
};

SimpleNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitSimpleName(this);
	}
};

SimpleNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitSimpleName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.SimpleNameContext = SimpleNameContext;

SHRContentProfileParser.prototype.simpleName = function() {

    var localctx = new SimpleNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, SHRContentProfileParser.RULE_simpleName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRContentProfileParser.ALL_CAPS) | (1 << SHRContentProfileParser.UPPER_WORD) | (1 << SHRContentProfileParser.LOWER_WORD))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PathNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_pathName;
    return this;
}

PathNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PathNameContext.prototype.constructor = PathNameContext;

PathNameContext.prototype.DOT_SEPARATED_UW = function() {
    return this.getToken(SHRContentProfileParser.DOT_SEPARATED_UW, 0);
};

PathNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterPathName(this);
	}
};

PathNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitPathName(this);
	}
};

PathNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitPathName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.PathNameContext = PathNameContext;

SHRContentProfileParser.prototype.pathName = function() {

    var localctx = new PathNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, SHRContentProfileParser.RULE_pathName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 85;
        this.match(SHRContentProfileParser.DOT_SEPARATED_UW);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SimpleOrPathNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_simpleOrPathName;
    return this;
}

SimpleOrPathNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimpleOrPathNameContext.prototype.constructor = SimpleOrPathNameContext;

SimpleOrPathNameContext.prototype.simpleName = function() {
    return this.getTypedRuleContext(SimpleNameContext,0);
};

SimpleOrPathNameContext.prototype.pathName = function() {
    return this.getTypedRuleContext(PathNameContext,0);
};

SimpleOrPathNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterSimpleOrPathName(this);
	}
};

SimpleOrPathNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitSimpleOrPathName(this);
	}
};

SimpleOrPathNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitSimpleOrPathName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.SimpleOrPathNameContext = SimpleOrPathNameContext;

SHRContentProfileParser.prototype.simpleOrPathName = function() {

    var localctx = new SimpleOrPathNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, SHRContentProfileParser.RULE_simpleOrPathName);
    try {
        this.state = 89;
        switch(this._input.LA(1)) {
        case SHRContentProfileParser.ALL_CAPS:
        case SHRContentProfileParser.UPPER_WORD:
        case SHRContentProfileParser.LOWER_WORD:
            this.enterOuterAlt(localctx, 1);
            this.state = 87;
            this.simpleName();
            break;
        case SHRContentProfileParser.DOT_SEPARATED_UW:
            this.enterOuterAlt(localctx, 2);
            this.state = 88;
            this.pathName();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.SHRContentProfileParser = SHRContentProfileParser;

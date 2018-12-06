// Generated from SHRDataElementParser.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SHRDataElementParserListener = require('./SHRDataElementParserListener').SHRDataElementParserListener;
var SHRDataElementParserVisitor = require('./SHRDataElementParserVisitor').SHRDataElementParserVisitor;

var grammarFileName = "SHRDataElementParser.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3P\u01d2\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4",
    "\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t",
    "\20\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27",
    "\t\27\4\30\t\30\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4",
    "\36\t\36\4\37\t\37\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t",
    "\'\4(\t(\4)\t)\4*\t*\4+\t+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t",
    "\61\4\62\t\62\4\63\t\63\4\64\t\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t",
    "8\3\2\3\2\5\2s\n\2\3\2\5\2v\n\2\3\2\5\2y\n\2\3\2\5\2|\n\2\3\2\3\2\3",
    "\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\7\4\u008a\n\4\f\4\16\4\u008d",
    "\13\4\3\5\6\5\u0090\n\5\r\5\16\5\u0091\3\6\3\6\3\6\3\6\3\6\3\7\6\7\u009a",
    "\n\7\r\7\16\7\u009b\3\b\3\b\3\b\3\b\3\b\3\t\7\t\u00a4\n\t\f\t\16\t\u00a7",
    "\13\t\3\n\3\n\5\n\u00ab\n\n\3\13\3\13\5\13\u00af\n\13\3\13\3\13\3\f",
    "\3\f\3\f\3\r\3\r\5\r\u00b8\n\r\3\r\3\r\3\16\3\16\3\16\3\17\3\17\5\17",
    "\u00c1\n\17\3\17\3\17\3\20\3\20\3\20\3\21\6\21\u00c9\n\21\r\21\16\21",
    "\u00ca\3\22\3\22\3\22\5\22\u00d0\n\22\3\23\5\23\u00d3\n\23\3\23\7\23",
    "\u00d6\n\23\f\23\16\23\u00d9\13\23\3\23\7\23\u00dc\n\23\f\23\16\23\u00df",
    "\13\23\3\24\3\24\3\24\3\24\3\24\7\24\u00e6\n\24\f\24\16\24\u00e9\13",
    "\24\3\25\3\25\3\25\3\25\5\25\u00ef\n\25\3\26\3\26\5\26\u00f3\n\26\3",
    "\27\5\27\u00f6\n\27\3\27\3\27\3\27\3\30\3\30\3\30\5\30\u00fe\n\30\3",
    "\31\3\31\3\31\5\31\u0103\n\31\3\32\3\32\3\32\5\32\u0108\n\32\3\33\3",
    "\33\3\33\7\33\u010d\n\33\f\33\16\33\u0110\13\33\3\34\3\34\3\34\3\35",
    "\3\35\3\35\3\35\3\36\3\36\3\37\3\37\3 \3 \3!\3!\3\"\3\"\5\"\u0123\n",
    "\"\3#\3#\5#\u0127\n#\3$\3$\3$\5$\u012c\n$\3%\3%\5%\u0130\n%\3&\3&\3",
    "\'\3\'\3\'\5\'\u0137\n\'\3\'\3\'\3(\3(\3(\3(\3(\5(\u0140\n(\3(\3(\5",
    "(\u0144\n(\3)\3)\3)\5)\u0149\n)\3*\3*\5*\u014d\n*\3*\3*\6*\u0151\n*",
    "\r*\16*\u0152\3*\3*\5*\u0157\n*\3*\3*\7*\u015b\n*\f*\16*\u015e\13*\3",
    "*\3*\5*\u0162\n*\3+\3+\5+\u0166\n+\3+\3+\3+\5+\u016b\n+\3+\3+\7+\u016f",
    "\n+\f+\16+\u0172\13+\3+\3+\3+\3+\3+\5+\u0179\n+\3+\3+\7+\u017d\n+\f",
    "+\16+\u0180\13+\7+\u0182\n+\f+\16+\u0185\13+\3,\3,\3,\3,\3,\3,\3,\5",
    ",\u018e\n,\3-\3-\5-\u0192\n-\3-\3-\3-\5-\u0197\n-\3-\5-\u019a\n-\3-",
    "\5-\u019d\n-\3-\5-\u01a0\n-\3.\3.\3.\3/\3/\6/\u01a7\n/\r/\16/\u01a8",
    "\3\60\3\60\3\60\3\61\3\61\3\61\3\61\5\61\u01b2\n\61\3\62\3\62\3\62\3",
    "\63\3\63\6\63\u01b9\n\63\r\63\16\63\u01ba\3\64\3\64\3\64\3\64\3\64\5",
    "\64\u01c2\n\64\3\65\3\65\3\66\3\66\3\66\3\66\3\67\3\67\5\67\u01cc\n",
    "\67\38\38\58\u01d0\n8\38\2\29\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36",
    " \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhjln\2\13\4\2//\61\62",
    "\3\2HI\4\2\r\r\"#\3\2FH\3\2\24\27\3\2\34\35\4\2\32\32  \4\2!!\64D\4",
    "\2\'\'EE\u01e6\2p\3\2\2\2\4\177\3\2\2\2\6\u0085\3\2\2\2\b\u008f\3\2",
    "\2\2\n\u0093\3\2\2\2\f\u0099\3\2\2\2\16\u009d\3\2\2\2\20\u00a5\3\2\2",
    "\2\22\u00aa\3\2\2\2\24\u00ac\3\2\2\2\26\u00b2\3\2\2\2\30\u00b5\3\2\2",
    "\2\32\u00bb\3\2\2\2\34\u00be\3\2\2\2\36\u00c4\3\2\2\2 \u00c8\3\2\2\2",
    "\"\u00cf\3\2\2\2$\u00d2\3\2\2\2&\u00e0\3\2\2\2(\u00ee\3\2\2\2*\u00f2",
    "\3\2\2\2,\u00f5\3\2\2\2.\u00fd\3\2\2\2\60\u00ff\3\2\2\2\62\u0104\3\2",
    "\2\2\64\u0109\3\2\2\2\66\u0111\3\2\2\28\u0114\3\2\2\2:\u0118\3\2\2\2",
    "<\u011a\3\2\2\2>\u011c\3\2\2\2@\u011e\3\2\2\2B\u0122\3\2\2\2D\u0124",
    "\3\2\2\2F\u012b\3\2\2\2H\u012f\3\2\2\2J\u0131\3\2\2\2L\u0136\3\2\2\2",
    "N\u013f\3\2\2\2P\u0145\3\2\2\2R\u014c\3\2\2\2T\u0165\3\2\2\2V\u018d",
    "\3\2\2\2X\u0191\3\2\2\2Z\u01a1\3\2\2\2\\\u01a6\3\2\2\2^\u01aa\3\2\2",
    "\2`\u01ad\3\2\2\2b\u01b3\3\2\2\2d\u01b8\3\2\2\2f\u01c1\3\2\2\2h\u01c3",
    "\3\2\2\2j\u01c5\3\2\2\2l\u01c9\3\2\2\2n\u01cd\3\2\2\2pr\5\4\3\2qs\5",
    "\66\34\2rq\3\2\2\2rs\3\2\2\2su\3\2\2\2tv\5\6\4\2ut\3\2\2\2uv\3\2\2\2",
    "vx\3\2\2\2wy\5\b\5\2xw\3\2\2\2xy\3\2\2\2y{\3\2\2\2z|\5\f\7\2{z\3\2\2",
    "\2{|\3\2\2\2|}\3\2\2\2}~\5\20\t\2~\3\3\2\2\2\177\u0080\7\3\2\2\u0080",
    "\u0081\7\4\2\2\u0081\u0082\58\35\2\u0082\u0083\7\5\2\2\u0083\u0084\5",
    ":\36\2\u0084\5\3\2\2\2\u0085\u0086\7\6\2\2\u0086\u008b\5:\36\2\u0087",
    "\u0088\7&\2\2\u0088\u008a\5:\36\2\u0089\u0087\3\2\2\2\u008a\u008d\3",
    "\2\2\2\u008b\u0089\3\2\2\2\u008b\u008c\3\2\2\2\u008c\7\3\2\2\2\u008d",
    "\u008b\3\2\2\2\u008e\u0090\5\n\6\2\u008f\u008e\3\2\2\2\u0090\u0091\3",
    "\2\2\2\u0091\u008f\3\2\2\2\u0091\u0092\3\2\2\2\u0092\t\3\2\2\2\u0093",
    "\u0094\7\7\2\2\u0094\u0095\7F\2\2\u0095\u0096\7%\2\2\u0096\u0097\7/",
    "\2\2\u0097\13\3\2\2\2\u0098\u009a\5\16\b\2\u0099\u0098\3\2\2\2\u009a",
    "\u009b\3\2\2\2\u009b\u0099\3\2\2\2\u009b\u009c\3\2\2\2\u009c\r\3\2\2",
    "\2\u009d\u009e\7\b\2\2\u009e\u009f\7F\2\2\u009f\u00a0\7%\2\2\u00a0\u00a1",
    "\t\2\2\2\u00a1\17\3\2\2\2\u00a2\u00a4\5\22\n\2\u00a3\u00a2\3\2\2\2\u00a4",
    "\u00a7\3\2\2\2\u00a5\u00a3\3\2\2\2\u00a5\u00a6\3\2\2\2\u00a6\21\3\2",
    "\2\2\u00a7\u00a5\3\2\2\2\u00a8\u00ab\5\24\13\2\u00a9\u00ab\5\30\r\2",
    "\u00aa\u00a8\3\2\2\2\u00aa\u00a9\3\2\2\2\u00ab\23\3\2\2\2\u00ac\u00ae",
    "\5\26\f\2\u00ad\u00af\5 \21\2\u00ae\u00ad\3\2\2\2\u00ae\u00af\3\2\2",
    "\2\u00af\u00b0\3\2\2\2\u00b0\u00b1\5$\23\2\u00b1\25\3\2\2\2\u00b2\u00b3",
    "\7\n\2\2\u00b3\u00b4\5> \2\u00b4\27\3\2\2\2\u00b5\u00b7\5\32\16\2\u00b6",
    "\u00b8\5 \21\2\u00b7\u00b6\3\2\2\2\u00b7\u00b8\3\2\2\2\u00b8\u00b9\3",
    "\2\2\2\u00b9\u00ba\5$\23\2\u00ba\31\3\2\2\2\u00bb\u00bc\7\13\2\2\u00bc",
    "\u00bd\5> \2\u00bd\33\3\2\2\2\u00be\u00c0\5\36\20\2\u00bf\u00c1\5 \21",
    "\2\u00c0\u00bf\3\2\2\2\u00c0\u00c1\3\2\2\2\u00c1\u00c2\3\2\2\2\u00c2",
    "\u00c3\5$\23\2\u00c3\35\3\2\2\2\u00c4\u00c5\7\t\2\2\u00c5\u00c6\5> ",
    "\2\u00c6\37\3\2\2\2\u00c7\u00c9\5\"\22\2\u00c8\u00c7\3\2\2\2\u00c9\u00ca",
    "\3\2\2\2\u00ca\u00c8\3\2\2\2\u00ca\u00cb\3\2\2\2\u00cb!\3\2\2\2\u00cc",
    "\u00d0\5\60\31\2\u00cd\u00d0\5\62\32\2\u00ce\u00d0\5\66\34\2\u00cf\u00cc",
    "\3\2\2\2\u00cf\u00cd\3\2\2\2\u00cf\u00ce\3\2\2\2\u00d0#\3\2\2\2\u00d1",
    "\u00d3\5&\24\2\u00d2\u00d1\3\2\2\2\u00d2\u00d3\3\2\2\2\u00d3\u00d7\3",
    "\2\2\2\u00d4\u00d6\5P)\2\u00d5\u00d4\3\2\2\2\u00d6\u00d9\3\2\2\2\u00d7",
    "\u00d5\3\2\2\2\u00d7\u00d8\3\2\2\2\u00d8\u00dd\3\2\2\2\u00d9\u00d7\3",
    "\2\2\2\u00da\u00dc\5*\26\2\u00db\u00da\3\2\2\2\u00dc\u00df\3\2\2\2\u00dd",
    "\u00db\3\2\2\2\u00dd\u00de\3\2\2\2\u00de%\3\2\2\2\u00df\u00dd\3\2\2",
    "\2\u00e0\u00e1\7\r\2\2\u00e1\u00e2\7,\2\2\u00e2\u00e7\5(\25\2\u00e3",
    "\u00e4\7\21\2\2\u00e4\u00e6\5(\25\2\u00e5\u00e3\3\2\2\2\u00e6\u00e9",
    "\3\2\2\2\u00e7\u00e5\3\2\2\2\u00e7\u00e8\3\2\2\2\u00e8\'\3\2\2\2\u00e9",
    "\u00e7\3\2\2\2\u00ea\u00ef\5B\"\2\u00eb\u00ef\5h\65\2\u00ec\u00ef\5",
    "N(\2\u00ed\u00ef\5l\67\2\u00ee\u00ea\3\2\2\2\u00ee\u00eb\3\2\2\2\u00ee",
    "\u00ec\3\2\2\2\u00ee\u00ed\3\2\2\2\u00ef)\3\2\2\2\u00f0\u00f3\5,\27",
    "\2\u00f1\u00f3\5N(\2\u00f2\u00f0\3\2\2\2\u00f2\u00f1\3\2\2\2\u00f3+",
    "\3\2\2\2\u00f4\u00f6\7\20\2\2\u00f5\u00f4\3\2\2\2\u00f5\u00f6\3\2\2",
    "\2\u00f6\u00f7\3\2\2\2\u00f7\u00f8\5.\30\2\u00f8\u00f9\5j\66\2\u00f9",
    "-\3\2\2\2\u00fa\u00fe\5<\37\2\u00fb\u00fe\5B\"\2\u00fc\u00fe\5l\67\2",
    "\u00fd\u00fa\3\2\2\2\u00fd\u00fb\3\2\2\2\u00fd\u00fc\3\2\2\2\u00fe/",
    "\3\2\2\2\u00ff\u0102\7\f\2\2\u0100\u0103\5B\"\2\u0101\u0103\5l\67\2",
    "\u0102\u0100\3\2\2\2\u0102\u0101\3\2\2\2\u0103\61\3\2\2\2\u0104\u0107",
    "\7\16\2\2\u0105\u0108\5\64\33\2\u0106\u0108\5l\67\2\u0107\u0105\3\2",
    "\2\2\u0107\u0106\3\2\2\2\u0108\63\3\2\2\2\u0109\u010e\5F$\2\u010a\u010b",
    "\7&\2\2\u010b\u010d\5F$\2\u010c\u010a\3\2\2\2\u010d\u0110\3\2\2\2\u010e",
    "\u010c\3\2\2\2\u010e\u010f\3\2\2\2\u010f\65\3\2\2\2\u0110\u010e\3\2",
    "\2\2\u0111\u0112\7\17\2\2\u0112\u0113\7K\2\2\u0113\67\3\2\2\2\u0114",
    "\u0115\7E\2\2\u0115\u0116\7$\2\2\u0116\u0117\7E\2\2\u01179\3\2\2\2\u0118",
    "\u0119\t\3\2\2\u0119;\3\2\2\2\u011a\u011b\t\4\2\2\u011b=\3\2\2\2\u011c",
    "\u011d\t\5\2\2\u011d?\3\2\2\2\u011e\u011f\7J\2\2\u011fA\3\2\2\2\u0120",
    "\u0123\5> \2\u0121\u0123\5@!\2\u0122\u0120\3\2\2\2\u0122\u0121\3\2\2",
    "\2\u0123C\3\2\2\2\u0124\u0126\7\63\2\2\u0125\u0127\7K\2\2\u0126\u0125",
    "\3\2\2\2\u0126\u0127\3\2\2\2\u0127E\3\2\2\2\u0128\u0129\7F\2\2\u0129",
    "\u012c\5D#\2\u012a\u012c\5n8\2\u012b\u0128\3\2\2\2\u012b\u012a\3\2\2",
    "\2\u012cG\3\2\2\2\u012d\u0130\5F$\2\u012e\u0130\5D#\2\u012f\u012d\3",
    "\2\2\2\u012f\u012e\3\2\2\2\u0130I\3\2\2\2\u0131\u0132\t\6\2\2\u0132",
    "K\3\2\2\2\u0133\u0137\5B\"\2\u0134\u0137\5h\65\2\u0135\u0137\5l\67\2",
    "\u0136\u0133\3\2\2\2\u0136\u0134\3\2\2\2\u0136\u0135\3\2\2\2\u0137\u0138",
    "\3\2\2\2\u0138\u0139\5j\66\2\u0139M\3\2\2\2\u013a\u0140\5<\37\2\u013b",
    "\u0140\5B\"\2\u013c\u0140\5R*\2\u013d\u0140\5T+\2\u013e\u0140\5h\65",
    "\2\u013f\u013a\3\2\2\2\u013f\u013b\3\2\2\2\u013f\u013c\3\2\2\2\u013f",
    "\u013d\3\2\2\2\u013f\u013e\3\2\2\2\u0140\u0143\3\2\2\2\u0141\u0144\5",
    "j\66\2\u0142\u0144\5V,\2\u0143\u0141\3\2\2\2\u0143\u0142\3\2\2\2\u0143",
    "\u0144\3\2\2\2\u0144O\3\2\2\2\u0145\u0148\7\r\2\2\u0146\u0149\5j\66",
    "\2\u0147\u0149\5V,\2\u0148\u0146\3\2\2\2\u0148\u0147\3\2\2\2\u0148\u0149",
    "\3\2\2\2\u0149Q\3\2\2\2\u014a\u014d\5<\37\2\u014b\u014d\5B\"\2\u014c",
    "\u014a\3\2\2\2\u014c\u014b\3\2\2\2\u014d\u0161\3\2\2\2\u014e\u014f\7",
    "$\2\2\u014f\u0151\5> \2\u0150\u014e\3\2\2\2\u0151\u0152\3\2\2\2\u0152",
    "\u0150\3\2\2\2\u0152\u0153\3\2\2\2\u0153\u0156\3\2\2\2\u0154\u0155\7",
    "$\2\2\u0155\u0157\5h\65\2\u0156\u0154\3\2\2\2\u0156\u0157\3\2\2\2\u0157",
    "\u0162\3\2\2\2\u0158\u0159\7$\2\2\u0159\u015b\5> \2\u015a\u0158\3\2",
    "\2\2\u015b\u015e\3\2\2\2\u015c\u015a\3\2\2\2\u015c\u015d\3\2\2\2\u015d",
    "\u015f\3\2\2\2\u015e\u015c\3\2\2\2\u015f\u0160\7$\2\2\u0160\u0162\5",
    "h\65\2\u0161\u0150\3\2\2\2\u0161\u015c\3\2\2\2\u0162S\3\2\2\2\u0163",
    "\u0166\5<\37\2\u0164\u0166\5B\"\2\u0165\u0163\3\2\2\2\u0165\u0164\3",
    "\2\2\2\u0166\u0170\3\2\2\2\u0167\u016a\7-\2\2\u0168\u016b\5> \2\u0169",
    "\u016b\5h\65\2\u016a\u0168\3\2\2\2\u016a\u0169\3\2\2\2\u016b\u016c\3",
    "\2\2\2\u016c\u016d\7.\2\2\u016d\u016f\3\2\2\2\u016e\u0167\3\2\2\2\u016f",
    "\u0172\3\2\2\2\u0170\u016e\3\2\2\2\u0170\u0171\3\2\2\2\u0171\u0183\3",
    "\2\2\2\u0172\u0170\3\2\2\2\u0173\u0174\7$\2\2\u0174\u017e\5> \2\u0175",
    "\u0178\7-\2\2\u0176\u0179\5> \2\u0177\u0179\5h\65\2\u0178\u0176\3\2",
    "\2\2\u0178\u0177\3\2\2\2\u0179\u017a\3\2\2\2\u017a\u017b\7.\2\2\u017b",
    "\u017d\3\2\2\2\u017c\u0175\3\2\2\2\u017d\u0180\3\2\2\2\u017e\u017c\3",
    "\2\2\2\u017e\u017f\3\2\2\2\u017f\u0182\3\2\2\2\u0180\u017e\3\2\2\2\u0181",
    "\u0173\3\2\2\2\u0182\u0185\3\2\2\2\u0183\u0181\3\2\2\2\u0183\u0184\3",
    "\2\2\2\u0184U\3\2\2\2\u0185\u0183\3\2\2\2\u0186\u018e\5X-\2\u0187\u018e",
    "\5Z.\2\u0188\u018e\5\\/\2\u0189\u018e\5^\60\2\u018a\u018e\5`\61\2\u018b",
    "\u018e\5d\63\2\u018c\u018e\5b\62\2\u018d\u0186\3\2\2\2\u018d\u0187\3",
    "\2\2\2\u018d\u0188\3\2\2\2\u018d\u0189\3\2\2\2\u018d\u018a\3\2\2\2\u018d",
    "\u018b\3\2\2\2\u018d\u018c\3\2\2\2\u018eW\3\2\2\2\u018f\u0192\7!\2\2",
    "\u0190\u0192\5B\"\2\u0191\u018f\3\2\2\2\u0191\u0190\3\2\2\2\u0191\u0192",
    "\3\2\2\2\u0192\u0193\3\2\2\2\u0193\u0194\7\30\2\2\u0194\u0196\5f\64",
    "\2\u0195\u0197\7(\2\2\u0196\u0195\3\2\2\2\u0196\u0197\3\2\2\2\u0197",
    "\u0199\3\2\2\2\u0198\u019a\5J&\2\u0199\u0198\3\2\2\2\u0199\u019a\3\2",
    "\2\2\u019a\u019c\3\2\2\2\u019b\u019d\7)\2\2\u019c\u019b\3\2\2\2\u019c",
    "\u019d\3\2\2\2\u019d\u019f\3\2\2\2\u019e\u01a0\7P\2\2\u019f\u019e\3",
    "\2\2\2\u019f\u01a0\3\2\2\2\u01a0Y\3\2\2\2\u01a1\u01a2\7%\2\2\u01a2\u01a3",
    "\5H%\2\u01a3[\3\2\2\2\u01a4\u01a5\7\33\2\2\u01a5\u01a7\5H%\2\u01a6\u01a4",
    "\3\2\2\2\u01a7\u01a8\3\2\2\2\u01a8\u01a6\3\2\2\2\u01a8\u01a9\3\2\2\2",
    "\u01a9]\3\2\2\2\u01aa\u01ab\7%\2\2\u01ab\u01ac\t\7\2\2\u01ac_\3\2\2",
    "\2\u01ad\u01b1\t\b\2\2\u01ae\u01b2\5B\"\2\u01af\u01b2\5h\65\2\u01b0",
    "\u01b2\5l\67\2\u01b1\u01ae\3\2\2\2\u01b1\u01af\3\2\2\2\u01b1\u01b0\3",
    "\2\2\2\u01b2a\3\2\2\2\u01b3\u01b4\7%\2\2\u01b4\u01b5\7/\2\2\u01b5c\3",
    "\2\2\2\u01b6\u01b7\7\33\2\2\u01b7\u01b9\5L\'\2\u01b8\u01b6\3\2\2\2\u01b9",
    "\u01ba\3\2\2\2\u01ba\u01b8\3\2\2\2\u01ba\u01bb\3\2\2\2\u01bbe\3\2\2",
    "\2\u01bc\u01c2\7/\2\2\u01bd\u01c2\7\60\2\2\u01be\u01c2\7\61\2\2\u01bf",
    "\u01c2\5> \2\u01c0\u01c2\5l\67\2\u01c1\u01bc\3\2\2\2\u01c1\u01bd\3\2",
    "\2\2\u01c1\u01be\3\2\2\2\u01c1\u01bf\3\2\2\2\u01c1\u01c0\3\2\2\2\u01c2",
    "g\3\2\2\2\u01c3\u01c4\t\t\2\2\u01c4i\3\2\2\2\u01c5\u01c6\7E\2\2\u01c6",
    "\u01c7\7*\2\2\u01c7\u01c8\t\n\2\2\u01c8k\3\2\2\2\u01c9\u01cb\7\36\2",
    "\2\u01ca\u01cc\7K\2\2\u01cb\u01ca\3\2\2\2\u01cb\u01cc\3\2\2\2\u01cc",
    "m\3\2\2\2\u01cd\u01cf\7\37\2\2\u01ce\u01d0\7K\2\2\u01cf\u01ce\3\2\2",
    "\2\u01cf\u01d0\3\2\2\2\u01d0o\3\2\2\2:rux{\u008b\u0091\u009b\u00a5\u00aa",
    "\u00ae\u00b7\u00c0\u00ca\u00cf\u00d2\u00d7\u00dd\u00e7\u00ee\u00f2\u00f5",
    "\u00fd\u0102\u0107\u010e\u0122\u0126\u012b\u012f\u0136\u013f\u0143\u0148",
    "\u014c\u0152\u0156\u015c\u0161\u0165\u016a\u0170\u0178\u017e\u0183\u018d",
    "\u0191\u0196\u0199\u019c\u019f\u01a8\u01b1\u01ba\u01c1\u01cb\u01cf"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'Grammar:'", "'DataElement'", "'Namespace:'", 
                     "'Uses:'", "'Path:'", "'CodeSystem:'", "'Abstract:'", 
                     "'Element:'", "'Entry:'", "'Parent:'", "'Value'", "'Concept:'", 
                     "'Description:'", "'Property:'", "'or'", "'with'", 
                     "'must be'", "'required'", "'preferred'", "'example'", 
                     "'extensible'", "'from'", "'is'", "'substitute'", "'includes'", 
                     "'true'", "'false'", "'TBD'", "'TBD#TBD'", "'only'", 
                     "'concept'", "'_Entry'", "'_Value'", "'.'", "'='", 
                     "','", "'*'", "'('", "')'", "'..'", "'+'", "':'", "'['", 
                     "']'", 'null', 'null', 'null', 'null', 'null', "'boolean'", 
                     "'integer'", "'string'", "'decimal'", "'uri'", "'base64Binary'", 
                     "'instant'", "'date'", "'dateTime'", "'time'", "'ConceptCode'", 
                     "'oid'", "'id'", "'markdown'", "'unsignedInt'", "'positiveInt'", 
                     "'xhtml'", 'null', 'null', 'null', 'null', 'null', 
                     'null', 'null', 'null', "'\n'" ];

var symbolicNames = [ 'null', "KW_GRAMMAR", "KW_G_DATA_ELEMENT", "KW_NAMESPACE", 
                      "KW_USES", "KW_PATH", "KW_VOCABULARY", "KW_ABSTRACT", 
                      "KW_ELEMENT", "KW_ENTRY", "KW_PARENT", "KW_VALUE", 
                      "KW_CONCEPT", "KW_DESCRIPTION", "KW_PROPERTY", "KW_OR", 
                      "KW_WITH", "KW_MUST_BE", "KW_REQUIRED", "KW_PREFERRED", 
                      "KW_EXAMPLE", "KW_EXTENSIBLE", "KW_FROM", "KW_IS", 
                      "KW_SUBSTITUTE", "KW_INCLUDES", "KW_TRUE", "KW_FALSE", 
                      "KW_TBD", "KW_TBD_CODE", "KW_ONLY", "KW_CODED_CONCEPT", 
                      "KW_BAR_ENTRY", "KW_BAR_VALUE", "DOT", "EQUAL", "COMMA", 
                      "STAR", "OPEN_PAREN", "CLOSE_PAREN", "RANGE", "PLUS", 
                      "COLON", "OPEN_BRACKET", "CLOSE_BRACKET", "URL", "PATH_URL", 
                      "URN_OID", "URN", "CODE", "KW_BOOLEAN", "KW_INTEGER", 
                      "KW_STRING", "KW_DECIMAL", "KW_URI", "KW_BASE64_BINARY", 
                      "KW_INSTANT", "KW_DATE", "KW_DATE_TIME", "KW_TIME", 
                      "KW_CONCEPT_CODE", "KW_OID", "KW_ID", "KW_MARKDOWN", 
                      "KW_UNSIGNED_INT", "KW_POSITIVE_INT", "KW_XHTML", 
                      "WHOLE_NUMBER", "ALL_CAPS", "UPPER_WORD", "LOWER_WORD", 
                      "DOT_SEPARATED_LW", "DOT_SEPARATED_UW", "STRING", 
                      "WS", "NEWLINE", "COMMENT", "LINE_COMMENT", "KW_IF_COVERED" ];

var ruleNames =  [ "doc", "docHeader", "usesStatement", "pathDefs", "pathDef", 
                   "vocabularyDefs", "vocabularyDef", "dataDefs", "dataDef", 
                   "elementDef", "elementHeader", "entryDef", "entryHeader", 
                   "abstractDef", "abstractHeader", "elementProps", "elementProp", 
                   "values", "value", "valueType", "field", "propertyField", 
                   "propertyFieldType", "parentProp", "conceptProp", "concepts", 
                   "descriptionProp", "version", "namespace", "specialWord", 
                   "simpleName", "fullyQualifiedName", "simpleOrFQName", 
                   "code", "fullyQualifiedCode", "codeOrFQCode", "bindingInfix", 
                   "typeConstraint", "elementWithConstraint", "valueWithConstraint", 
                   "elementPath", "elementBracketPath", "elementConstraint", 
                   "elementCodeVSConstraint", "elementCodeValueConstraint", 
                   "elementIncludesCodeValueConstraint", "elementBooleanConstraint", 
                   "elementTypeConstraint", "elementUrlConstraint", "elementIncludesTypeConstraint", 
                   "valueset", "primitive", "count", "tbd", "tbdCode" ];

function SHRDataElementParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SHRDataElementParser.prototype = Object.create(antlr4.Parser.prototype);
SHRDataElementParser.prototype.constructor = SHRDataElementParser;

Object.defineProperty(SHRDataElementParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SHRDataElementParser.EOF = antlr4.Token.EOF;
SHRDataElementParser.KW_GRAMMAR = 1;
SHRDataElementParser.KW_G_DATA_ELEMENT = 2;
SHRDataElementParser.KW_NAMESPACE = 3;
SHRDataElementParser.KW_USES = 4;
SHRDataElementParser.KW_PATH = 5;
SHRDataElementParser.KW_VOCABULARY = 6;
SHRDataElementParser.KW_ABSTRACT = 7;
SHRDataElementParser.KW_ELEMENT = 8;
SHRDataElementParser.KW_ENTRY = 9;
SHRDataElementParser.KW_PARENT = 10;
SHRDataElementParser.KW_VALUE = 11;
SHRDataElementParser.KW_CONCEPT = 12;
SHRDataElementParser.KW_DESCRIPTION = 13;
SHRDataElementParser.KW_PROPERTY = 14;
SHRDataElementParser.KW_OR = 15;
SHRDataElementParser.KW_WITH = 16;
SHRDataElementParser.KW_MUST_BE = 17;
SHRDataElementParser.KW_REQUIRED = 18;
SHRDataElementParser.KW_PREFERRED = 19;
SHRDataElementParser.KW_EXAMPLE = 20;
SHRDataElementParser.KW_EXTENSIBLE = 21;
SHRDataElementParser.KW_FROM = 22;
SHRDataElementParser.KW_IS = 23;
SHRDataElementParser.KW_SUBSTITUTE = 24;
SHRDataElementParser.KW_INCLUDES = 25;
SHRDataElementParser.KW_TRUE = 26;
SHRDataElementParser.KW_FALSE = 27;
SHRDataElementParser.KW_TBD = 28;
SHRDataElementParser.KW_TBD_CODE = 29;
SHRDataElementParser.KW_ONLY = 30;
SHRDataElementParser.KW_CODED_CONCEPT = 31;
SHRDataElementParser.KW_BAR_ENTRY = 32;
SHRDataElementParser.KW_BAR_VALUE = 33;
SHRDataElementParser.DOT = 34;
SHRDataElementParser.EQUAL = 35;
SHRDataElementParser.COMMA = 36;
SHRDataElementParser.STAR = 37;
SHRDataElementParser.OPEN_PAREN = 38;
SHRDataElementParser.CLOSE_PAREN = 39;
SHRDataElementParser.RANGE = 40;
SHRDataElementParser.PLUS = 41;
SHRDataElementParser.COLON = 42;
SHRDataElementParser.OPEN_BRACKET = 43;
SHRDataElementParser.CLOSE_BRACKET = 44;
SHRDataElementParser.URL = 45;
SHRDataElementParser.PATH_URL = 46;
SHRDataElementParser.URN_OID = 47;
SHRDataElementParser.URN = 48;
SHRDataElementParser.CODE = 49;
SHRDataElementParser.KW_BOOLEAN = 50;
SHRDataElementParser.KW_INTEGER = 51;
SHRDataElementParser.KW_STRING = 52;
SHRDataElementParser.KW_DECIMAL = 53;
SHRDataElementParser.KW_URI = 54;
SHRDataElementParser.KW_BASE64_BINARY = 55;
SHRDataElementParser.KW_INSTANT = 56;
SHRDataElementParser.KW_DATE = 57;
SHRDataElementParser.KW_DATE_TIME = 58;
SHRDataElementParser.KW_TIME = 59;
SHRDataElementParser.KW_CONCEPT_CODE = 60;
SHRDataElementParser.KW_OID = 61;
SHRDataElementParser.KW_ID = 62;
SHRDataElementParser.KW_MARKDOWN = 63;
SHRDataElementParser.KW_UNSIGNED_INT = 64;
SHRDataElementParser.KW_POSITIVE_INT = 65;
SHRDataElementParser.KW_XHTML = 66;
SHRDataElementParser.WHOLE_NUMBER = 67;
SHRDataElementParser.ALL_CAPS = 68;
SHRDataElementParser.UPPER_WORD = 69;
SHRDataElementParser.LOWER_WORD = 70;
SHRDataElementParser.DOT_SEPARATED_LW = 71;
SHRDataElementParser.DOT_SEPARATED_UW = 72;
SHRDataElementParser.STRING = 73;
SHRDataElementParser.WS = 74;
SHRDataElementParser.NEWLINE = 75;
SHRDataElementParser.COMMENT = 76;
SHRDataElementParser.LINE_COMMENT = 77;
SHRDataElementParser.KW_IF_COVERED = 78;

SHRDataElementParser.RULE_doc = 0;
SHRDataElementParser.RULE_docHeader = 1;
SHRDataElementParser.RULE_usesStatement = 2;
SHRDataElementParser.RULE_pathDefs = 3;
SHRDataElementParser.RULE_pathDef = 4;
SHRDataElementParser.RULE_vocabularyDefs = 5;
SHRDataElementParser.RULE_vocabularyDef = 6;
SHRDataElementParser.RULE_dataDefs = 7;
SHRDataElementParser.RULE_dataDef = 8;
SHRDataElementParser.RULE_elementDef = 9;
SHRDataElementParser.RULE_elementHeader = 10;
SHRDataElementParser.RULE_entryDef = 11;
SHRDataElementParser.RULE_entryHeader = 12;
SHRDataElementParser.RULE_abstractDef = 13;
SHRDataElementParser.RULE_abstractHeader = 14;
SHRDataElementParser.RULE_elementProps = 15;
SHRDataElementParser.RULE_elementProp = 16;
SHRDataElementParser.RULE_values = 17;
SHRDataElementParser.RULE_value = 18;
SHRDataElementParser.RULE_valueType = 19;
SHRDataElementParser.RULE_field = 20;
SHRDataElementParser.RULE_propertyField = 21;
SHRDataElementParser.RULE_propertyFieldType = 22;
SHRDataElementParser.RULE_parentProp = 23;
SHRDataElementParser.RULE_conceptProp = 24;
SHRDataElementParser.RULE_concepts = 25;
SHRDataElementParser.RULE_descriptionProp = 26;
SHRDataElementParser.RULE_version = 27;
SHRDataElementParser.RULE_namespace = 28;
SHRDataElementParser.RULE_specialWord = 29;
SHRDataElementParser.RULE_simpleName = 30;
SHRDataElementParser.RULE_fullyQualifiedName = 31;
SHRDataElementParser.RULE_simpleOrFQName = 32;
SHRDataElementParser.RULE_code = 33;
SHRDataElementParser.RULE_fullyQualifiedCode = 34;
SHRDataElementParser.RULE_codeOrFQCode = 35;
SHRDataElementParser.RULE_bindingInfix = 36;
SHRDataElementParser.RULE_typeConstraint = 37;
SHRDataElementParser.RULE_elementWithConstraint = 38;
SHRDataElementParser.RULE_valueWithConstraint = 39;
SHRDataElementParser.RULE_elementPath = 40;
SHRDataElementParser.RULE_elementBracketPath = 41;
SHRDataElementParser.RULE_elementConstraint = 42;
SHRDataElementParser.RULE_elementCodeVSConstraint = 43;
SHRDataElementParser.RULE_elementCodeValueConstraint = 44;
SHRDataElementParser.RULE_elementIncludesCodeValueConstraint = 45;
SHRDataElementParser.RULE_elementBooleanConstraint = 46;
SHRDataElementParser.RULE_elementTypeConstraint = 47;
SHRDataElementParser.RULE_elementUrlConstraint = 48;
SHRDataElementParser.RULE_elementIncludesTypeConstraint = 49;
SHRDataElementParser.RULE_valueset = 50;
SHRDataElementParser.RULE_primitive = 51;
SHRDataElementParser.RULE_count = 52;
SHRDataElementParser.RULE_tbd = 53;
SHRDataElementParser.RULE_tbdCode = 54;

function DocContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_doc;
    return this;
}

DocContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DocContext.prototype.constructor = DocContext;

DocContext.prototype.docHeader = function() {
    return this.getTypedRuleContext(DocHeaderContext,0);
};

DocContext.prototype.dataDefs = function() {
    return this.getTypedRuleContext(DataDefsContext,0);
};

DocContext.prototype.descriptionProp = function() {
    return this.getTypedRuleContext(DescriptionPropContext,0);
};

DocContext.prototype.usesStatement = function() {
    return this.getTypedRuleContext(UsesStatementContext,0);
};

DocContext.prototype.pathDefs = function() {
    return this.getTypedRuleContext(PathDefsContext,0);
};

DocContext.prototype.vocabularyDefs = function() {
    return this.getTypedRuleContext(VocabularyDefsContext,0);
};

DocContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterDoc(this);
	}
};

DocContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitDoc(this);
	}
};

DocContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitDoc(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.DocContext = DocContext;

SHRDataElementParser.prototype.doc = function() {

    var localctx = new DocContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SHRDataElementParser.RULE_doc);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 110;
        this.docHeader();
        this.state = 112;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_DESCRIPTION) {
            this.state = 111;
            this.descriptionProp();
        }

        this.state = 115;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_USES) {
            this.state = 114;
            this.usesStatement();
        }

        this.state = 118;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_PATH) {
            this.state = 117;
            this.pathDefs();
        }

        this.state = 121;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_VOCABULARY) {
            this.state = 120;
            this.vocabularyDefs();
        }

        this.state = 123;
        this.dataDefs();
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
    this.ruleIndex = SHRDataElementParser.RULE_docHeader;
    return this;
}

DocHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DocHeaderContext.prototype.constructor = DocHeaderContext;

DocHeaderContext.prototype.KW_GRAMMAR = function() {
    return this.getToken(SHRDataElementParser.KW_GRAMMAR, 0);
};

DocHeaderContext.prototype.KW_G_DATA_ELEMENT = function() {
    return this.getToken(SHRDataElementParser.KW_G_DATA_ELEMENT, 0);
};

DocHeaderContext.prototype.version = function() {
    return this.getTypedRuleContext(VersionContext,0);
};

DocHeaderContext.prototype.KW_NAMESPACE = function() {
    return this.getToken(SHRDataElementParser.KW_NAMESPACE, 0);
};

DocHeaderContext.prototype.namespace = function() {
    return this.getTypedRuleContext(NamespaceContext,0);
};

DocHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterDocHeader(this);
	}
};

DocHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitDocHeader(this);
	}
};

DocHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitDocHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.DocHeaderContext = DocHeaderContext;

SHRDataElementParser.prototype.docHeader = function() {

    var localctx = new DocHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SHRDataElementParser.RULE_docHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125;
        this.match(SHRDataElementParser.KW_GRAMMAR);
        this.state = 126;
        this.match(SHRDataElementParser.KW_G_DATA_ELEMENT);
        this.state = 127;
        this.version();
        this.state = 128;
        this.match(SHRDataElementParser.KW_NAMESPACE);
        this.state = 129;
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

function UsesStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_usesStatement;
    return this;
}

UsesStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UsesStatementContext.prototype.constructor = UsesStatementContext;

UsesStatementContext.prototype.KW_USES = function() {
    return this.getToken(SHRDataElementParser.KW_USES, 0);
};

UsesStatementContext.prototype.namespace = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NamespaceContext);
    } else {
        return this.getTypedRuleContext(NamespaceContext,i);
    }
};

UsesStatementContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRDataElementParser.COMMA);
    } else {
        return this.getToken(SHRDataElementParser.COMMA, i);
    }
};


UsesStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterUsesStatement(this);
	}
};

UsesStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitUsesStatement(this);
	}
};

UsesStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitUsesStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.UsesStatementContext = UsesStatementContext;

SHRDataElementParser.prototype.usesStatement = function() {

    var localctx = new UsesStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SHRDataElementParser.RULE_usesStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 131;
        this.match(SHRDataElementParser.KW_USES);
        this.state = 132;
        this.namespace();
        this.state = 137;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRDataElementParser.COMMA) {
            this.state = 133;
            this.match(SHRDataElementParser.COMMA);
            this.state = 134;
            this.namespace();
            this.state = 139;
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

function PathDefsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_pathDefs;
    return this;
}

PathDefsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PathDefsContext.prototype.constructor = PathDefsContext;

PathDefsContext.prototype.pathDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PathDefContext);
    } else {
        return this.getTypedRuleContext(PathDefContext,i);
    }
};

PathDefsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterPathDefs(this);
	}
};

PathDefsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitPathDefs(this);
	}
};

PathDefsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitPathDefs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.PathDefsContext = PathDefsContext;

SHRDataElementParser.prototype.pathDefs = function() {

    var localctx = new PathDefsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SHRDataElementParser.RULE_pathDefs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 141; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 140;
            this.pathDef();
            this.state = 143; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SHRDataElementParser.KW_PATH);
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

function PathDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_pathDef;
    return this;
}

PathDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PathDefContext.prototype.constructor = PathDefContext;

PathDefContext.prototype.KW_PATH = function() {
    return this.getToken(SHRDataElementParser.KW_PATH, 0);
};

PathDefContext.prototype.ALL_CAPS = function() {
    return this.getToken(SHRDataElementParser.ALL_CAPS, 0);
};

PathDefContext.prototype.EQUAL = function() {
    return this.getToken(SHRDataElementParser.EQUAL, 0);
};

PathDefContext.prototype.URL = function() {
    return this.getToken(SHRDataElementParser.URL, 0);
};

PathDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterPathDef(this);
	}
};

PathDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitPathDef(this);
	}
};

PathDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitPathDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.PathDefContext = PathDefContext;

SHRDataElementParser.prototype.pathDef = function() {

    var localctx = new PathDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SHRDataElementParser.RULE_pathDef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 145;
        this.match(SHRDataElementParser.KW_PATH);
        this.state = 146;
        this.match(SHRDataElementParser.ALL_CAPS);
        this.state = 147;
        this.match(SHRDataElementParser.EQUAL);
        this.state = 148;
        this.match(SHRDataElementParser.URL);
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

function VocabularyDefsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_vocabularyDefs;
    return this;
}

VocabularyDefsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VocabularyDefsContext.prototype.constructor = VocabularyDefsContext;

VocabularyDefsContext.prototype.vocabularyDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VocabularyDefContext);
    } else {
        return this.getTypedRuleContext(VocabularyDefContext,i);
    }
};

VocabularyDefsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterVocabularyDefs(this);
	}
};

VocabularyDefsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitVocabularyDefs(this);
	}
};

VocabularyDefsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitVocabularyDefs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.VocabularyDefsContext = VocabularyDefsContext;

SHRDataElementParser.prototype.vocabularyDefs = function() {

    var localctx = new VocabularyDefsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SHRDataElementParser.RULE_vocabularyDefs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 151; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 150;
            this.vocabularyDef();
            this.state = 153; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SHRDataElementParser.KW_VOCABULARY);
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

function VocabularyDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_vocabularyDef;
    return this;
}

VocabularyDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VocabularyDefContext.prototype.constructor = VocabularyDefContext;

VocabularyDefContext.prototype.KW_VOCABULARY = function() {
    return this.getToken(SHRDataElementParser.KW_VOCABULARY, 0);
};

VocabularyDefContext.prototype.ALL_CAPS = function() {
    return this.getToken(SHRDataElementParser.ALL_CAPS, 0);
};

VocabularyDefContext.prototype.EQUAL = function() {
    return this.getToken(SHRDataElementParser.EQUAL, 0);
};

VocabularyDefContext.prototype.URL = function() {
    return this.getToken(SHRDataElementParser.URL, 0);
};

VocabularyDefContext.prototype.URN_OID = function() {
    return this.getToken(SHRDataElementParser.URN_OID, 0);
};

VocabularyDefContext.prototype.URN = function() {
    return this.getToken(SHRDataElementParser.URN, 0);
};

VocabularyDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterVocabularyDef(this);
	}
};

VocabularyDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitVocabularyDef(this);
	}
};

VocabularyDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitVocabularyDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.VocabularyDefContext = VocabularyDefContext;

SHRDataElementParser.prototype.vocabularyDef = function() {

    var localctx = new VocabularyDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SHRDataElementParser.RULE_vocabularyDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 155;
        this.match(SHRDataElementParser.KW_VOCABULARY);
        this.state = 156;
        this.match(SHRDataElementParser.ALL_CAPS);
        this.state = 157;
        this.match(SHRDataElementParser.EQUAL);
        this.state = 158;
        _la = this._input.LA(1);
        if(!(((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (SHRDataElementParser.URL - 45)) | (1 << (SHRDataElementParser.URN_OID - 45)) | (1 << (SHRDataElementParser.URN - 45)))) !== 0))) {
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

function DataDefsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_dataDefs;
    return this;
}

DataDefsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DataDefsContext.prototype.constructor = DataDefsContext;

DataDefsContext.prototype.dataDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DataDefContext);
    } else {
        return this.getTypedRuleContext(DataDefContext,i);
    }
};

DataDefsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterDataDefs(this);
	}
};

DataDefsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitDataDefs(this);
	}
};

DataDefsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitDataDefs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.DataDefsContext = DataDefsContext;

SHRDataElementParser.prototype.dataDefs = function() {

    var localctx = new DataDefsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SHRDataElementParser.RULE_dataDefs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 163;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRDataElementParser.KW_ELEMENT || _la===SHRDataElementParser.KW_ENTRY) {
            this.state = 160;
            this.dataDef();
            this.state = 165;
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

function DataDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_dataDef;
    return this;
}

DataDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DataDefContext.prototype.constructor = DataDefContext;

DataDefContext.prototype.elementDef = function() {
    return this.getTypedRuleContext(ElementDefContext,0);
};

DataDefContext.prototype.entryDef = function() {
    return this.getTypedRuleContext(EntryDefContext,0);
};

DataDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterDataDef(this);
	}
};

DataDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitDataDef(this);
	}
};

DataDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitDataDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.DataDefContext = DataDefContext;

SHRDataElementParser.prototype.dataDef = function() {

    var localctx = new DataDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SHRDataElementParser.RULE_dataDef);
    try {
        this.state = 168;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.KW_ELEMENT:
            this.enterOuterAlt(localctx, 1);
            this.state = 166;
            this.elementDef();
            break;
        case SHRDataElementParser.KW_ENTRY:
            this.enterOuterAlt(localctx, 2);
            this.state = 167;
            this.entryDef();
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

function ElementDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementDef;
    return this;
}

ElementDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementDefContext.prototype.constructor = ElementDefContext;

ElementDefContext.prototype.elementHeader = function() {
    return this.getTypedRuleContext(ElementHeaderContext,0);
};

ElementDefContext.prototype.values = function() {
    return this.getTypedRuleContext(ValuesContext,0);
};

ElementDefContext.prototype.elementProps = function() {
    return this.getTypedRuleContext(ElementPropsContext,0);
};

ElementDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementDef(this);
	}
};

ElementDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementDef(this);
	}
};

ElementDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementDefContext = ElementDefContext;

SHRDataElementParser.prototype.elementDef = function() {

    var localctx = new ElementDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SHRDataElementParser.RULE_elementDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 170;
        this.elementHeader();
        this.state = 172;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRDataElementParser.KW_PARENT) | (1 << SHRDataElementParser.KW_CONCEPT) | (1 << SHRDataElementParser.KW_DESCRIPTION))) !== 0)) {
            this.state = 171;
            this.elementProps();
        }

        this.state = 174;
        this.values();
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

function ElementHeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementHeader;
    return this;
}

ElementHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementHeaderContext.prototype.constructor = ElementHeaderContext;

ElementHeaderContext.prototype.KW_ELEMENT = function() {
    return this.getToken(SHRDataElementParser.KW_ELEMENT, 0);
};

ElementHeaderContext.prototype.simpleName = function() {
    return this.getTypedRuleContext(SimpleNameContext,0);
};

ElementHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementHeader(this);
	}
};

ElementHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementHeader(this);
	}
};

ElementHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementHeaderContext = ElementHeaderContext;

SHRDataElementParser.prototype.elementHeader = function() {

    var localctx = new ElementHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, SHRDataElementParser.RULE_elementHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 176;
        this.match(SHRDataElementParser.KW_ELEMENT);
        this.state = 177;
        this.simpleName();
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

function EntryDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_entryDef;
    return this;
}

EntryDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EntryDefContext.prototype.constructor = EntryDefContext;

EntryDefContext.prototype.entryHeader = function() {
    return this.getTypedRuleContext(EntryHeaderContext,0);
};

EntryDefContext.prototype.values = function() {
    return this.getTypedRuleContext(ValuesContext,0);
};

EntryDefContext.prototype.elementProps = function() {
    return this.getTypedRuleContext(ElementPropsContext,0);
};

EntryDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterEntryDef(this);
	}
};

EntryDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitEntryDef(this);
	}
};

EntryDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitEntryDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.EntryDefContext = EntryDefContext;

SHRDataElementParser.prototype.entryDef = function() {

    var localctx = new EntryDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, SHRDataElementParser.RULE_entryDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 179;
        this.entryHeader();
        this.state = 181;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRDataElementParser.KW_PARENT) | (1 << SHRDataElementParser.KW_CONCEPT) | (1 << SHRDataElementParser.KW_DESCRIPTION))) !== 0)) {
            this.state = 180;
            this.elementProps();
        }

        this.state = 183;
        this.values();
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

function EntryHeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_entryHeader;
    return this;
}

EntryHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EntryHeaderContext.prototype.constructor = EntryHeaderContext;

EntryHeaderContext.prototype.KW_ENTRY = function() {
    return this.getToken(SHRDataElementParser.KW_ENTRY, 0);
};

EntryHeaderContext.prototype.simpleName = function() {
    return this.getTypedRuleContext(SimpleNameContext,0);
};

EntryHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterEntryHeader(this);
	}
};

EntryHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitEntryHeader(this);
	}
};

EntryHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitEntryHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.EntryHeaderContext = EntryHeaderContext;

SHRDataElementParser.prototype.entryHeader = function() {

    var localctx = new EntryHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, SHRDataElementParser.RULE_entryHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 185;
        this.match(SHRDataElementParser.KW_ENTRY);
        this.state = 186;
        this.simpleName();
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

function AbstractDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_abstractDef;
    return this;
}

AbstractDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AbstractDefContext.prototype.constructor = AbstractDefContext;

AbstractDefContext.prototype.abstractHeader = function() {
    return this.getTypedRuleContext(AbstractHeaderContext,0);
};

AbstractDefContext.prototype.values = function() {
    return this.getTypedRuleContext(ValuesContext,0);
};

AbstractDefContext.prototype.elementProps = function() {
    return this.getTypedRuleContext(ElementPropsContext,0);
};

AbstractDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterAbstractDef(this);
	}
};

AbstractDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitAbstractDef(this);
	}
};

AbstractDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitAbstractDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.AbstractDefContext = AbstractDefContext;

SHRDataElementParser.prototype.abstractDef = function() {

    var localctx = new AbstractDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, SHRDataElementParser.RULE_abstractDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 188;
        this.abstractHeader();
        this.state = 190;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRDataElementParser.KW_PARENT) | (1 << SHRDataElementParser.KW_CONCEPT) | (1 << SHRDataElementParser.KW_DESCRIPTION))) !== 0)) {
            this.state = 189;
            this.elementProps();
        }

        this.state = 192;
        this.values();
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

function AbstractHeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_abstractHeader;
    return this;
}

AbstractHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AbstractHeaderContext.prototype.constructor = AbstractHeaderContext;

AbstractHeaderContext.prototype.KW_ABSTRACT = function() {
    return this.getToken(SHRDataElementParser.KW_ABSTRACT, 0);
};

AbstractHeaderContext.prototype.simpleName = function() {
    return this.getTypedRuleContext(SimpleNameContext,0);
};

AbstractHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterAbstractHeader(this);
	}
};

AbstractHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitAbstractHeader(this);
	}
};

AbstractHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitAbstractHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.AbstractHeaderContext = AbstractHeaderContext;

SHRDataElementParser.prototype.abstractHeader = function() {

    var localctx = new AbstractHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, SHRDataElementParser.RULE_abstractHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 194;
        this.match(SHRDataElementParser.KW_ABSTRACT);
        this.state = 195;
        this.simpleName();
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

function ElementPropsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementProps;
    return this;
}

ElementPropsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementPropsContext.prototype.constructor = ElementPropsContext;

ElementPropsContext.prototype.elementProp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElementPropContext);
    } else {
        return this.getTypedRuleContext(ElementPropContext,i);
    }
};

ElementPropsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementProps(this);
	}
};

ElementPropsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementProps(this);
	}
};

ElementPropsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementProps(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementPropsContext = ElementPropsContext;

SHRDataElementParser.prototype.elementProps = function() {

    var localctx = new ElementPropsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, SHRDataElementParser.RULE_elementProps);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 198; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 197;
            this.elementProp();
            this.state = 200; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRDataElementParser.KW_PARENT) | (1 << SHRDataElementParser.KW_CONCEPT) | (1 << SHRDataElementParser.KW_DESCRIPTION))) !== 0));
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

function ElementPropContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementProp;
    return this;
}

ElementPropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementPropContext.prototype.constructor = ElementPropContext;

ElementPropContext.prototype.parentProp = function() {
    return this.getTypedRuleContext(ParentPropContext,0);
};

ElementPropContext.prototype.conceptProp = function() {
    return this.getTypedRuleContext(ConceptPropContext,0);
};

ElementPropContext.prototype.descriptionProp = function() {
    return this.getTypedRuleContext(DescriptionPropContext,0);
};

ElementPropContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementProp(this);
	}
};

ElementPropContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementProp(this);
	}
};

ElementPropContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementProp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementPropContext = ElementPropContext;

SHRDataElementParser.prototype.elementProp = function() {

    var localctx = new ElementPropContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, SHRDataElementParser.RULE_elementProp);
    try {
        this.state = 205;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.KW_PARENT:
            this.enterOuterAlt(localctx, 1);
            this.state = 202;
            this.parentProp();
            break;
        case SHRDataElementParser.KW_CONCEPT:
            this.enterOuterAlt(localctx, 2);
            this.state = 203;
            this.conceptProp();
            break;
        case SHRDataElementParser.KW_DESCRIPTION:
            this.enterOuterAlt(localctx, 3);
            this.state = 204;
            this.descriptionProp();
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

function ValuesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_values;
    return this;
}

ValuesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesContext.prototype.constructor = ValuesContext;

ValuesContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

ValuesContext.prototype.valueWithConstraint = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueWithConstraintContext);
    } else {
        return this.getTypedRuleContext(ValueWithConstraintContext,i);
    }
};

ValuesContext.prototype.field = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FieldContext);
    } else {
        return this.getTypedRuleContext(FieldContext,i);
    }
};

ValuesContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterValues(this);
	}
};

ValuesContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitValues(this);
	}
};

ValuesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitValues(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ValuesContext = ValuesContext;

SHRDataElementParser.prototype.values = function() {

    var localctx = new ValuesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, SHRDataElementParser.RULE_values);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208;
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        if(la_===1) {
            this.state = 207;
            this.value();

        }
        this.state = 213;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 210;
                this.valueWithConstraint(); 
            }
            this.state = 215;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
        }

        this.state = 219;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 11)) & ~0x1f) == 0 && ((1 << (_la - 11)) & ((1 << (SHRDataElementParser.KW_VALUE - 11)) | (1 << (SHRDataElementParser.KW_PROPERTY - 11)) | (1 << (SHRDataElementParser.KW_TBD - 11)) | (1 << (SHRDataElementParser.KW_CODED_CONCEPT - 11)) | (1 << (SHRDataElementParser.KW_BAR_ENTRY - 11)) | (1 << (SHRDataElementParser.KW_BAR_VALUE - 11)))) !== 0) || ((((_la - 50)) & ~0x1f) == 0 && ((1 << (_la - 50)) & ((1 << (SHRDataElementParser.KW_BOOLEAN - 50)) | (1 << (SHRDataElementParser.KW_INTEGER - 50)) | (1 << (SHRDataElementParser.KW_STRING - 50)) | (1 << (SHRDataElementParser.KW_DECIMAL - 50)) | (1 << (SHRDataElementParser.KW_URI - 50)) | (1 << (SHRDataElementParser.KW_BASE64_BINARY - 50)) | (1 << (SHRDataElementParser.KW_INSTANT - 50)) | (1 << (SHRDataElementParser.KW_DATE - 50)) | (1 << (SHRDataElementParser.KW_DATE_TIME - 50)) | (1 << (SHRDataElementParser.KW_TIME - 50)) | (1 << (SHRDataElementParser.KW_CONCEPT_CODE - 50)) | (1 << (SHRDataElementParser.KW_OID - 50)) | (1 << (SHRDataElementParser.KW_ID - 50)) | (1 << (SHRDataElementParser.KW_MARKDOWN - 50)) | (1 << (SHRDataElementParser.KW_UNSIGNED_INT - 50)) | (1 << (SHRDataElementParser.KW_POSITIVE_INT - 50)) | (1 << (SHRDataElementParser.KW_XHTML - 50)) | (1 << (SHRDataElementParser.ALL_CAPS - 50)) | (1 << (SHRDataElementParser.UPPER_WORD - 50)) | (1 << (SHRDataElementParser.LOWER_WORD - 50)) | (1 << (SHRDataElementParser.DOT_SEPARATED_UW - 50)))) !== 0)) {
            this.state = 216;
            this.field();
            this.state = 221;
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

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.KW_VALUE = function() {
    return this.getToken(SHRDataElementParser.KW_VALUE, 0);
};

ValueContext.prototype.COLON = function() {
    return this.getToken(SHRDataElementParser.COLON, 0);
};

ValueContext.prototype.valueType = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueTypeContext);
    } else {
        return this.getTypedRuleContext(ValueTypeContext,i);
    }
};

ValueContext.prototype.KW_OR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRDataElementParser.KW_OR);
    } else {
        return this.getToken(SHRDataElementParser.KW_OR, i);
    }
};


ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitValue(this);
	}
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ValueContext = ValueContext;

SHRDataElementParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, SHRDataElementParser.RULE_value);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 222;
        this.match(SHRDataElementParser.KW_VALUE);
        this.state = 223;
        this.match(SHRDataElementParser.COLON);
        this.state = 224;
        this.valueType();
        this.state = 229;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRDataElementParser.KW_OR) {
            this.state = 225;
            this.match(SHRDataElementParser.KW_OR);
            this.state = 226;
            this.valueType();
            this.state = 231;
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

function ValueTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_valueType;
    return this;
}

ValueTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueTypeContext.prototype.constructor = ValueTypeContext;

ValueTypeContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

ValueTypeContext.prototype.primitive = function() {
    return this.getTypedRuleContext(PrimitiveContext,0);
};

ValueTypeContext.prototype.elementWithConstraint = function() {
    return this.getTypedRuleContext(ElementWithConstraintContext,0);
};

ValueTypeContext.prototype.tbd = function() {
    return this.getTypedRuleContext(TbdContext,0);
};

ValueTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterValueType(this);
	}
};

ValueTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitValueType(this);
	}
};

ValueTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitValueType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ValueTypeContext = ValueTypeContext;

SHRDataElementParser.prototype.valueType = function() {

    var localctx = new ValueTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, SHRDataElementParser.RULE_valueType);
    try {
        this.state = 236;
        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 232;
            this.simpleOrFQName();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 233;
            this.primitive();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 234;
            this.elementWithConstraint();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 235;
            this.tbd();
            break;

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
    this.ruleIndex = SHRDataElementParser.RULE_field;
    return this;
}

FieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldContext.prototype.constructor = FieldContext;

FieldContext.prototype.propertyField = function() {
    return this.getTypedRuleContext(PropertyFieldContext,0);
};

FieldContext.prototype.elementWithConstraint = function() {
    return this.getTypedRuleContext(ElementWithConstraintContext,0);
};

FieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterField(this);
	}
};

FieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitField(this);
	}
};

FieldContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitField(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.FieldContext = FieldContext;

SHRDataElementParser.prototype.field = function() {

    var localctx = new FieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, SHRDataElementParser.RULE_field);
    try {
        this.state = 240;
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 238;
            this.propertyField();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 239;
            this.elementWithConstraint();
            break;

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

function PropertyFieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_propertyField;
    return this;
}

PropertyFieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyFieldContext.prototype.constructor = PropertyFieldContext;

PropertyFieldContext.prototype.propertyFieldType = function() {
    return this.getTypedRuleContext(PropertyFieldTypeContext,0);
};

PropertyFieldContext.prototype.count = function() {
    return this.getTypedRuleContext(CountContext,0);
};

PropertyFieldContext.prototype.KW_PROPERTY = function() {
    return this.getToken(SHRDataElementParser.KW_PROPERTY, 0);
};

PropertyFieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterPropertyField(this);
	}
};

PropertyFieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitPropertyField(this);
	}
};

PropertyFieldContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitPropertyField(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.PropertyFieldContext = PropertyFieldContext;

SHRDataElementParser.prototype.propertyField = function() {

    var localctx = new PropertyFieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, SHRDataElementParser.RULE_propertyField);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 243;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_PROPERTY) {
            this.state = 242;
            this.match(SHRDataElementParser.KW_PROPERTY);
        }

        this.state = 245;
        this.propertyFieldType();
        this.state = 246;
        this.count();
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

function PropertyFieldTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_propertyFieldType;
    return this;
}

PropertyFieldTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyFieldTypeContext.prototype.constructor = PropertyFieldTypeContext;

PropertyFieldTypeContext.prototype.specialWord = function() {
    return this.getTypedRuleContext(SpecialWordContext,0);
};

PropertyFieldTypeContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

PropertyFieldTypeContext.prototype.tbd = function() {
    return this.getTypedRuleContext(TbdContext,0);
};

PropertyFieldTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterPropertyFieldType(this);
	}
};

PropertyFieldTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitPropertyFieldType(this);
	}
};

PropertyFieldTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitPropertyFieldType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.PropertyFieldTypeContext = PropertyFieldTypeContext;

SHRDataElementParser.prototype.propertyFieldType = function() {

    var localctx = new PropertyFieldTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, SHRDataElementParser.RULE_propertyFieldType);
    try {
        this.state = 251;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.KW_VALUE:
        case SHRDataElementParser.KW_BAR_ENTRY:
        case SHRDataElementParser.KW_BAR_VALUE:
            this.enterOuterAlt(localctx, 1);
            this.state = 248;
            this.specialWord();
            break;
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
        case SHRDataElementParser.DOT_SEPARATED_UW:
            this.enterOuterAlt(localctx, 2);
            this.state = 249;
            this.simpleOrFQName();
            break;
        case SHRDataElementParser.KW_TBD:
            this.enterOuterAlt(localctx, 3);
            this.state = 250;
            this.tbd();
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

function ParentPropContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_parentProp;
    return this;
}

ParentPropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParentPropContext.prototype.constructor = ParentPropContext;

ParentPropContext.prototype.KW_PARENT = function() {
    return this.getToken(SHRDataElementParser.KW_PARENT, 0);
};

ParentPropContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

ParentPropContext.prototype.tbd = function() {
    return this.getTypedRuleContext(TbdContext,0);
};

ParentPropContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterParentProp(this);
	}
};

ParentPropContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitParentProp(this);
	}
};

ParentPropContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitParentProp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ParentPropContext = ParentPropContext;

SHRDataElementParser.prototype.parentProp = function() {

    var localctx = new ParentPropContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, SHRDataElementParser.RULE_parentProp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 253;
        this.match(SHRDataElementParser.KW_PARENT);
        this.state = 256;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
        case SHRDataElementParser.DOT_SEPARATED_UW:
            this.state = 254;
            this.simpleOrFQName();
            break;
        case SHRDataElementParser.KW_TBD:
            this.state = 255;
            this.tbd();
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

function ConceptPropContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_conceptProp;
    return this;
}

ConceptPropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConceptPropContext.prototype.constructor = ConceptPropContext;

ConceptPropContext.prototype.KW_CONCEPT = function() {
    return this.getToken(SHRDataElementParser.KW_CONCEPT, 0);
};

ConceptPropContext.prototype.concepts = function() {
    return this.getTypedRuleContext(ConceptsContext,0);
};

ConceptPropContext.prototype.tbd = function() {
    return this.getTypedRuleContext(TbdContext,0);
};

ConceptPropContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterConceptProp(this);
	}
};

ConceptPropContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitConceptProp(this);
	}
};

ConceptPropContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitConceptProp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ConceptPropContext = ConceptPropContext;

SHRDataElementParser.prototype.conceptProp = function() {

    var localctx = new ConceptPropContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, SHRDataElementParser.RULE_conceptProp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 258;
        this.match(SHRDataElementParser.KW_CONCEPT);
        this.state = 261;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.KW_TBD_CODE:
        case SHRDataElementParser.ALL_CAPS:
            this.state = 259;
            this.concepts();
            break;
        case SHRDataElementParser.KW_TBD:
            this.state = 260;
            this.tbd();
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

function ConceptsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_concepts;
    return this;
}

ConceptsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConceptsContext.prototype.constructor = ConceptsContext;

ConceptsContext.prototype.fullyQualifiedCode = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FullyQualifiedCodeContext);
    } else {
        return this.getTypedRuleContext(FullyQualifiedCodeContext,i);
    }
};

ConceptsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRDataElementParser.COMMA);
    } else {
        return this.getToken(SHRDataElementParser.COMMA, i);
    }
};


ConceptsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterConcepts(this);
	}
};

ConceptsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitConcepts(this);
	}
};

ConceptsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitConcepts(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ConceptsContext = ConceptsContext;

SHRDataElementParser.prototype.concepts = function() {

    var localctx = new ConceptsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, SHRDataElementParser.RULE_concepts);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 263;
        this.fullyQualifiedCode();
        this.state = 268;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRDataElementParser.COMMA) {
            this.state = 264;
            this.match(SHRDataElementParser.COMMA);
            this.state = 265;
            this.fullyQualifiedCode();
            this.state = 270;
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

function DescriptionPropContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_descriptionProp;
    return this;
}

DescriptionPropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DescriptionPropContext.prototype.constructor = DescriptionPropContext;

DescriptionPropContext.prototype.KW_DESCRIPTION = function() {
    return this.getToken(SHRDataElementParser.KW_DESCRIPTION, 0);
};

DescriptionPropContext.prototype.STRING = function() {
    return this.getToken(SHRDataElementParser.STRING, 0);
};

DescriptionPropContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterDescriptionProp(this);
	}
};

DescriptionPropContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitDescriptionProp(this);
	}
};

DescriptionPropContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitDescriptionProp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.DescriptionPropContext = DescriptionPropContext;

SHRDataElementParser.prototype.descriptionProp = function() {

    var localctx = new DescriptionPropContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, SHRDataElementParser.RULE_descriptionProp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 271;
        this.match(SHRDataElementParser.KW_DESCRIPTION);
        this.state = 272;
        this.match(SHRDataElementParser.STRING);
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
    this.ruleIndex = SHRDataElementParser.RULE_version;
    return this;
}

VersionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VersionContext.prototype.constructor = VersionContext;

VersionContext.prototype.WHOLE_NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRDataElementParser.WHOLE_NUMBER);
    } else {
        return this.getToken(SHRDataElementParser.WHOLE_NUMBER, i);
    }
};


VersionContext.prototype.DOT = function() {
    return this.getToken(SHRDataElementParser.DOT, 0);
};

VersionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterVersion(this);
	}
};

VersionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitVersion(this);
	}
};

VersionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitVersion(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.VersionContext = VersionContext;

SHRDataElementParser.prototype.version = function() {

    var localctx = new VersionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, SHRDataElementParser.RULE_version);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 274;
        this.match(SHRDataElementParser.WHOLE_NUMBER);
        this.state = 275;
        this.match(SHRDataElementParser.DOT);
        this.state = 276;
        this.match(SHRDataElementParser.WHOLE_NUMBER);
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
    this.ruleIndex = SHRDataElementParser.RULE_namespace;
    return this;
}

NamespaceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamespaceContext.prototype.constructor = NamespaceContext;

NamespaceContext.prototype.LOWER_WORD = function() {
    return this.getToken(SHRDataElementParser.LOWER_WORD, 0);
};

NamespaceContext.prototype.DOT_SEPARATED_LW = function() {
    return this.getToken(SHRDataElementParser.DOT_SEPARATED_LW, 0);
};

NamespaceContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterNamespace(this);
	}
};

NamespaceContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitNamespace(this);
	}
};

NamespaceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitNamespace(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.NamespaceContext = NamespaceContext;

SHRDataElementParser.prototype.namespace = function() {

    var localctx = new NamespaceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, SHRDataElementParser.RULE_namespace);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 278;
        _la = this._input.LA(1);
        if(!(_la===SHRDataElementParser.LOWER_WORD || _la===SHRDataElementParser.DOT_SEPARATED_LW)) {
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

function SpecialWordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_specialWord;
    return this;
}

SpecialWordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SpecialWordContext.prototype.constructor = SpecialWordContext;

SpecialWordContext.prototype.KW_BAR_ENTRY = function() {
    return this.getToken(SHRDataElementParser.KW_BAR_ENTRY, 0);
};

SpecialWordContext.prototype.KW_BAR_VALUE = function() {
    return this.getToken(SHRDataElementParser.KW_BAR_VALUE, 0);
};

SpecialWordContext.prototype.KW_VALUE = function() {
    return this.getToken(SHRDataElementParser.KW_VALUE, 0);
};

SpecialWordContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterSpecialWord(this);
	}
};

SpecialWordContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitSpecialWord(this);
	}
};

SpecialWordContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitSpecialWord(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.SpecialWordContext = SpecialWordContext;

SHRDataElementParser.prototype.specialWord = function() {

    var localctx = new SpecialWordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, SHRDataElementParser.RULE_specialWord);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 280;
        _la = this._input.LA(1);
        if(!(((((_la - 11)) & ~0x1f) == 0 && ((1 << (_la - 11)) & ((1 << (SHRDataElementParser.KW_VALUE - 11)) | (1 << (SHRDataElementParser.KW_BAR_ENTRY - 11)) | (1 << (SHRDataElementParser.KW_BAR_VALUE - 11)))) !== 0))) {
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
    this.ruleIndex = SHRDataElementParser.RULE_simpleName;
    return this;
}

SimpleNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimpleNameContext.prototype.constructor = SimpleNameContext;

SimpleNameContext.prototype.UPPER_WORD = function() {
    return this.getToken(SHRDataElementParser.UPPER_WORD, 0);
};

SimpleNameContext.prototype.ALL_CAPS = function() {
    return this.getToken(SHRDataElementParser.ALL_CAPS, 0);
};

SimpleNameContext.prototype.LOWER_WORD = function() {
    return this.getToken(SHRDataElementParser.LOWER_WORD, 0);
};

SimpleNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterSimpleName(this);
	}
};

SimpleNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitSimpleName(this);
	}
};

SimpleNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitSimpleName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.SimpleNameContext = SimpleNameContext;

SHRDataElementParser.prototype.simpleName = function() {

    var localctx = new SimpleNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, SHRDataElementParser.RULE_simpleName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 282;
        _la = this._input.LA(1);
        if(!(((((_la - 68)) & ~0x1f) == 0 && ((1 << (_la - 68)) & ((1 << (SHRDataElementParser.ALL_CAPS - 68)) | (1 << (SHRDataElementParser.UPPER_WORD - 68)) | (1 << (SHRDataElementParser.LOWER_WORD - 68)))) !== 0))) {
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

function FullyQualifiedNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_fullyQualifiedName;
    return this;
}

FullyQualifiedNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FullyQualifiedNameContext.prototype.constructor = FullyQualifiedNameContext;

FullyQualifiedNameContext.prototype.DOT_SEPARATED_UW = function() {
    return this.getToken(SHRDataElementParser.DOT_SEPARATED_UW, 0);
};

FullyQualifiedNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterFullyQualifiedName(this);
	}
};

FullyQualifiedNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitFullyQualifiedName(this);
	}
};

FullyQualifiedNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitFullyQualifiedName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.FullyQualifiedNameContext = FullyQualifiedNameContext;

SHRDataElementParser.prototype.fullyQualifiedName = function() {

    var localctx = new FullyQualifiedNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, SHRDataElementParser.RULE_fullyQualifiedName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 284;
        this.match(SHRDataElementParser.DOT_SEPARATED_UW);
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

function SimpleOrFQNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_simpleOrFQName;
    return this;
}

SimpleOrFQNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimpleOrFQNameContext.prototype.constructor = SimpleOrFQNameContext;

SimpleOrFQNameContext.prototype.simpleName = function() {
    return this.getTypedRuleContext(SimpleNameContext,0);
};

SimpleOrFQNameContext.prototype.fullyQualifiedName = function() {
    return this.getTypedRuleContext(FullyQualifiedNameContext,0);
};

SimpleOrFQNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterSimpleOrFQName(this);
	}
};

SimpleOrFQNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitSimpleOrFQName(this);
	}
};

SimpleOrFQNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitSimpleOrFQName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.SimpleOrFQNameContext = SimpleOrFQNameContext;

SHRDataElementParser.prototype.simpleOrFQName = function() {

    var localctx = new SimpleOrFQNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, SHRDataElementParser.RULE_simpleOrFQName);
    try {
        this.state = 288;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
            this.enterOuterAlt(localctx, 1);
            this.state = 286;
            this.simpleName();
            break;
        case SHRDataElementParser.DOT_SEPARATED_UW:
            this.enterOuterAlt(localctx, 2);
            this.state = 287;
            this.fullyQualifiedName();
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

function CodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_code;
    return this;
}

CodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CodeContext.prototype.constructor = CodeContext;

CodeContext.prototype.CODE = function() {
    return this.getToken(SHRDataElementParser.CODE, 0);
};

CodeContext.prototype.STRING = function() {
    return this.getToken(SHRDataElementParser.STRING, 0);
};

CodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterCode(this);
	}
};

CodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitCode(this);
	}
};

CodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitCode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.CodeContext = CodeContext;

SHRDataElementParser.prototype.code = function() {

    var localctx = new CodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, SHRDataElementParser.RULE_code);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 290;
        this.match(SHRDataElementParser.CODE);
        this.state = 292;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.STRING) {
            this.state = 291;
            this.match(SHRDataElementParser.STRING);
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

function FullyQualifiedCodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_fullyQualifiedCode;
    return this;
}

FullyQualifiedCodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FullyQualifiedCodeContext.prototype.constructor = FullyQualifiedCodeContext;

FullyQualifiedCodeContext.prototype.ALL_CAPS = function() {
    return this.getToken(SHRDataElementParser.ALL_CAPS, 0);
};

FullyQualifiedCodeContext.prototype.code = function() {
    return this.getTypedRuleContext(CodeContext,0);
};

FullyQualifiedCodeContext.prototype.tbdCode = function() {
    return this.getTypedRuleContext(TbdCodeContext,0);
};

FullyQualifiedCodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterFullyQualifiedCode(this);
	}
};

FullyQualifiedCodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitFullyQualifiedCode(this);
	}
};

FullyQualifiedCodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitFullyQualifiedCode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.FullyQualifiedCodeContext = FullyQualifiedCodeContext;

SHRDataElementParser.prototype.fullyQualifiedCode = function() {

    var localctx = new FullyQualifiedCodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, SHRDataElementParser.RULE_fullyQualifiedCode);
    try {
        this.state = 297;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.ALL_CAPS:
            this.enterOuterAlt(localctx, 1);
            this.state = 294;
            this.match(SHRDataElementParser.ALL_CAPS);
            this.state = 295;
            this.code();
            break;
        case SHRDataElementParser.KW_TBD_CODE:
            this.enterOuterAlt(localctx, 2);
            this.state = 296;
            this.tbdCode();
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

function CodeOrFQCodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_codeOrFQCode;
    return this;
}

CodeOrFQCodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CodeOrFQCodeContext.prototype.constructor = CodeOrFQCodeContext;

CodeOrFQCodeContext.prototype.fullyQualifiedCode = function() {
    return this.getTypedRuleContext(FullyQualifiedCodeContext,0);
};

CodeOrFQCodeContext.prototype.code = function() {
    return this.getTypedRuleContext(CodeContext,0);
};

CodeOrFQCodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterCodeOrFQCode(this);
	}
};

CodeOrFQCodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitCodeOrFQCode(this);
	}
};

CodeOrFQCodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitCodeOrFQCode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.CodeOrFQCodeContext = CodeOrFQCodeContext;

SHRDataElementParser.prototype.codeOrFQCode = function() {

    var localctx = new CodeOrFQCodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, SHRDataElementParser.RULE_codeOrFQCode);
    try {
        this.state = 301;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.KW_TBD_CODE:
        case SHRDataElementParser.ALL_CAPS:
            this.enterOuterAlt(localctx, 1);
            this.state = 299;
            this.fullyQualifiedCode();
            break;
        case SHRDataElementParser.CODE:
            this.enterOuterAlt(localctx, 2);
            this.state = 300;
            this.code();
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

function BindingInfixContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_bindingInfix;
    return this;
}

BindingInfixContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BindingInfixContext.prototype.constructor = BindingInfixContext;

BindingInfixContext.prototype.KW_REQUIRED = function() {
    return this.getToken(SHRDataElementParser.KW_REQUIRED, 0);
};

BindingInfixContext.prototype.KW_PREFERRED = function() {
    return this.getToken(SHRDataElementParser.KW_PREFERRED, 0);
};

BindingInfixContext.prototype.KW_EXAMPLE = function() {
    return this.getToken(SHRDataElementParser.KW_EXAMPLE, 0);
};

BindingInfixContext.prototype.KW_EXTENSIBLE = function() {
    return this.getToken(SHRDataElementParser.KW_EXTENSIBLE, 0);
};

BindingInfixContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterBindingInfix(this);
	}
};

BindingInfixContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitBindingInfix(this);
	}
};

BindingInfixContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitBindingInfix(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.BindingInfixContext = BindingInfixContext;

SHRDataElementParser.prototype.bindingInfix = function() {

    var localctx = new BindingInfixContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, SHRDataElementParser.RULE_bindingInfix);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 303;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRDataElementParser.KW_REQUIRED) | (1 << SHRDataElementParser.KW_PREFERRED) | (1 << SHRDataElementParser.KW_EXAMPLE) | (1 << SHRDataElementParser.KW_EXTENSIBLE))) !== 0))) {
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

function TypeConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_typeConstraint;
    return this;
}

TypeConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeConstraintContext.prototype.constructor = TypeConstraintContext;

TypeConstraintContext.prototype.count = function() {
    return this.getTypedRuleContext(CountContext,0);
};

TypeConstraintContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

TypeConstraintContext.prototype.primitive = function() {
    return this.getTypedRuleContext(PrimitiveContext,0);
};

TypeConstraintContext.prototype.tbd = function() {
    return this.getTypedRuleContext(TbdContext,0);
};

TypeConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterTypeConstraint(this);
	}
};

TypeConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitTypeConstraint(this);
	}
};

TypeConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitTypeConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.TypeConstraintContext = TypeConstraintContext;

SHRDataElementParser.prototype.typeConstraint = function() {

    var localctx = new TypeConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, SHRDataElementParser.RULE_typeConstraint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 308;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
        case SHRDataElementParser.DOT_SEPARATED_UW:
            this.state = 305;
            this.simpleOrFQName();
            break;
        case SHRDataElementParser.KW_CODED_CONCEPT:
        case SHRDataElementParser.KW_BOOLEAN:
        case SHRDataElementParser.KW_INTEGER:
        case SHRDataElementParser.KW_STRING:
        case SHRDataElementParser.KW_DECIMAL:
        case SHRDataElementParser.KW_URI:
        case SHRDataElementParser.KW_BASE64_BINARY:
        case SHRDataElementParser.KW_INSTANT:
        case SHRDataElementParser.KW_DATE:
        case SHRDataElementParser.KW_DATE_TIME:
        case SHRDataElementParser.KW_TIME:
        case SHRDataElementParser.KW_CONCEPT_CODE:
        case SHRDataElementParser.KW_OID:
        case SHRDataElementParser.KW_ID:
        case SHRDataElementParser.KW_MARKDOWN:
        case SHRDataElementParser.KW_UNSIGNED_INT:
        case SHRDataElementParser.KW_POSITIVE_INT:
        case SHRDataElementParser.KW_XHTML:
            this.state = 306;
            this.primitive();
            break;
        case SHRDataElementParser.KW_TBD:
            this.state = 307;
            this.tbd();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 310;
        this.count();
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

function ElementWithConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementWithConstraint;
    return this;
}

ElementWithConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementWithConstraintContext.prototype.constructor = ElementWithConstraintContext;

ElementWithConstraintContext.prototype.specialWord = function() {
    return this.getTypedRuleContext(SpecialWordContext,0);
};

ElementWithConstraintContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

ElementWithConstraintContext.prototype.elementPath = function() {
    return this.getTypedRuleContext(ElementPathContext,0);
};

ElementWithConstraintContext.prototype.elementBracketPath = function() {
    return this.getTypedRuleContext(ElementBracketPathContext,0);
};

ElementWithConstraintContext.prototype.primitive = function() {
    return this.getTypedRuleContext(PrimitiveContext,0);
};

ElementWithConstraintContext.prototype.count = function() {
    return this.getTypedRuleContext(CountContext,0);
};

ElementWithConstraintContext.prototype.elementConstraint = function() {
    return this.getTypedRuleContext(ElementConstraintContext,0);
};

ElementWithConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementWithConstraint(this);
	}
};

ElementWithConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementWithConstraint(this);
	}
};

ElementWithConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementWithConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementWithConstraintContext = ElementWithConstraintContext;

SHRDataElementParser.prototype.elementWithConstraint = function() {

    var localctx = new ElementWithConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, SHRDataElementParser.RULE_elementWithConstraint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 317;
        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
        switch(la_) {
        case 1:
            this.state = 312;
            this.specialWord();
            break;

        case 2:
            this.state = 313;
            this.simpleOrFQName();
            break;

        case 3:
            this.state = 314;
            this.elementPath();
            break;

        case 4:
            this.state = 315;
            this.elementBracketPath();
            break;

        case 5:
            this.state = 316;
            this.primitive();
            break;

        }
        this.state = 321;
        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
        if(la_===1) {
            this.state = 319;
            this.count();

        } else if(la_===2) {
            this.state = 320;
            this.elementConstraint();

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

function ValueWithConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_valueWithConstraint;
    return this;
}

ValueWithConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueWithConstraintContext.prototype.constructor = ValueWithConstraintContext;

ValueWithConstraintContext.prototype.KW_VALUE = function() {
    return this.getToken(SHRDataElementParser.KW_VALUE, 0);
};

ValueWithConstraintContext.prototype.count = function() {
    return this.getTypedRuleContext(CountContext,0);
};

ValueWithConstraintContext.prototype.elementConstraint = function() {
    return this.getTypedRuleContext(ElementConstraintContext,0);
};

ValueWithConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterValueWithConstraint(this);
	}
};

ValueWithConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitValueWithConstraint(this);
	}
};

ValueWithConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitValueWithConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ValueWithConstraintContext = ValueWithConstraintContext;

SHRDataElementParser.prototype.valueWithConstraint = function() {

    var localctx = new ValueWithConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, SHRDataElementParser.RULE_valueWithConstraint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 323;
        this.match(SHRDataElementParser.KW_VALUE);
        this.state = 326;
        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
        if(la_===1) {
            this.state = 324;
            this.count();

        } else if(la_===2) {
            this.state = 325;
            this.elementConstraint();

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

function ElementPathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementPath;
    return this;
}

ElementPathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementPathContext.prototype.constructor = ElementPathContext;

ElementPathContext.prototype.specialWord = function() {
    return this.getTypedRuleContext(SpecialWordContext,0);
};

ElementPathContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

ElementPathContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRDataElementParser.DOT);
    } else {
        return this.getToken(SHRDataElementParser.DOT, i);
    }
};


ElementPathContext.prototype.primitive = function() {
    return this.getTypedRuleContext(PrimitiveContext,0);
};

ElementPathContext.prototype.simpleName = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SimpleNameContext);
    } else {
        return this.getTypedRuleContext(SimpleNameContext,i);
    }
};

ElementPathContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementPath(this);
	}
};

ElementPathContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementPath(this);
	}
};

ElementPathContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementPath(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementPathContext = ElementPathContext;

SHRDataElementParser.prototype.elementPath = function() {

    var localctx = new ElementPathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, SHRDataElementParser.RULE_elementPath);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 330;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.KW_VALUE:
        case SHRDataElementParser.KW_BAR_ENTRY:
        case SHRDataElementParser.KW_BAR_VALUE:
            this.state = 328;
            this.specialWord();
            break;
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
        case SHRDataElementParser.DOT_SEPARATED_UW:
            this.state = 329;
            this.simpleOrFQName();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 351;
        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
        switch(la_) {
        case 1:
            this.state = 334; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 332;
            		this.match(SHRDataElementParser.DOT);
            		this.state = 333;
            		this.simpleName();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 336; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,34, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 340;
            _la = this._input.LA(1);
            if(_la===SHRDataElementParser.DOT) {
                this.state = 338;
                this.match(SHRDataElementParser.DOT);
                this.state = 339;
                this.primitive();
            }

            break;

        case 2:
            this.state = 346;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,36,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 342;
                    this.match(SHRDataElementParser.DOT);
                    this.state = 343;
                    this.simpleName(); 
                }
                this.state = 348;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,36,this._ctx);
            }

            this.state = 349;
            this.match(SHRDataElementParser.DOT);
            this.state = 350;
            this.primitive();
            break;

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

function ElementBracketPathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementBracketPath;
    return this;
}

ElementBracketPathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementBracketPathContext.prototype.constructor = ElementBracketPathContext;

ElementBracketPathContext.prototype.specialWord = function() {
    return this.getTypedRuleContext(SpecialWordContext,0);
};

ElementBracketPathContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

ElementBracketPathContext.prototype.OPEN_BRACKET = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRDataElementParser.OPEN_BRACKET);
    } else {
        return this.getToken(SHRDataElementParser.OPEN_BRACKET, i);
    }
};


ElementBracketPathContext.prototype.CLOSE_BRACKET = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRDataElementParser.CLOSE_BRACKET);
    } else {
        return this.getToken(SHRDataElementParser.CLOSE_BRACKET, i);
    }
};


ElementBracketPathContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRDataElementParser.DOT);
    } else {
        return this.getToken(SHRDataElementParser.DOT, i);
    }
};


ElementBracketPathContext.prototype.simpleName = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SimpleNameContext);
    } else {
        return this.getTypedRuleContext(SimpleNameContext,i);
    }
};

ElementBracketPathContext.prototype.primitive = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PrimitiveContext);
    } else {
        return this.getTypedRuleContext(PrimitiveContext,i);
    }
};

ElementBracketPathContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementBracketPath(this);
	}
};

ElementBracketPathContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementBracketPath(this);
	}
};

ElementBracketPathContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementBracketPath(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementBracketPathContext = ElementBracketPathContext;

SHRDataElementParser.prototype.elementBracketPath = function() {

    var localctx = new ElementBracketPathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, SHRDataElementParser.RULE_elementBracketPath);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 355;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.KW_VALUE:
        case SHRDataElementParser.KW_BAR_ENTRY:
        case SHRDataElementParser.KW_BAR_VALUE:
            this.state = 353;
            this.specialWord();
            break;
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
        case SHRDataElementParser.DOT_SEPARATED_UW:
            this.state = 354;
            this.simpleOrFQName();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 366;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRDataElementParser.OPEN_BRACKET) {
            this.state = 357;
            this.match(SHRDataElementParser.OPEN_BRACKET);
            this.state = 360;
            switch(this._input.LA(1)) {
            case SHRDataElementParser.ALL_CAPS:
            case SHRDataElementParser.UPPER_WORD:
            case SHRDataElementParser.LOWER_WORD:
                this.state = 358;
                this.simpleName();
                break;
            case SHRDataElementParser.KW_CODED_CONCEPT:
            case SHRDataElementParser.KW_BOOLEAN:
            case SHRDataElementParser.KW_INTEGER:
            case SHRDataElementParser.KW_STRING:
            case SHRDataElementParser.KW_DECIMAL:
            case SHRDataElementParser.KW_URI:
            case SHRDataElementParser.KW_BASE64_BINARY:
            case SHRDataElementParser.KW_INSTANT:
            case SHRDataElementParser.KW_DATE:
            case SHRDataElementParser.KW_DATE_TIME:
            case SHRDataElementParser.KW_TIME:
            case SHRDataElementParser.KW_CONCEPT_CODE:
            case SHRDataElementParser.KW_OID:
            case SHRDataElementParser.KW_ID:
            case SHRDataElementParser.KW_MARKDOWN:
            case SHRDataElementParser.KW_UNSIGNED_INT:
            case SHRDataElementParser.KW_POSITIVE_INT:
            case SHRDataElementParser.KW_XHTML:
                this.state = 359;
                this.primitive();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 362;
            this.match(SHRDataElementParser.CLOSE_BRACKET);
            this.state = 368;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 385;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRDataElementParser.DOT) {
            this.state = 369;
            this.match(SHRDataElementParser.DOT);
            this.state = 370;
            this.simpleName();
            this.state = 380;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SHRDataElementParser.OPEN_BRACKET) {
                this.state = 371;
                this.match(SHRDataElementParser.OPEN_BRACKET);
                this.state = 374;
                switch(this._input.LA(1)) {
                case SHRDataElementParser.ALL_CAPS:
                case SHRDataElementParser.UPPER_WORD:
                case SHRDataElementParser.LOWER_WORD:
                    this.state = 372;
                    this.simpleName();
                    break;
                case SHRDataElementParser.KW_CODED_CONCEPT:
                case SHRDataElementParser.KW_BOOLEAN:
                case SHRDataElementParser.KW_INTEGER:
                case SHRDataElementParser.KW_STRING:
                case SHRDataElementParser.KW_DECIMAL:
                case SHRDataElementParser.KW_URI:
                case SHRDataElementParser.KW_BASE64_BINARY:
                case SHRDataElementParser.KW_INSTANT:
                case SHRDataElementParser.KW_DATE:
                case SHRDataElementParser.KW_DATE_TIME:
                case SHRDataElementParser.KW_TIME:
                case SHRDataElementParser.KW_CONCEPT_CODE:
                case SHRDataElementParser.KW_OID:
                case SHRDataElementParser.KW_ID:
                case SHRDataElementParser.KW_MARKDOWN:
                case SHRDataElementParser.KW_UNSIGNED_INT:
                case SHRDataElementParser.KW_POSITIVE_INT:
                case SHRDataElementParser.KW_XHTML:
                    this.state = 373;
                    this.primitive();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 376;
                this.match(SHRDataElementParser.CLOSE_BRACKET);
                this.state = 382;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 387;
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

function ElementConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementConstraint;
    return this;
}

ElementConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementConstraintContext.prototype.constructor = ElementConstraintContext;

ElementConstraintContext.prototype.elementCodeVSConstraint = function() {
    return this.getTypedRuleContext(ElementCodeVSConstraintContext,0);
};

ElementConstraintContext.prototype.elementCodeValueConstraint = function() {
    return this.getTypedRuleContext(ElementCodeValueConstraintContext,0);
};

ElementConstraintContext.prototype.elementIncludesCodeValueConstraint = function() {
    return this.getTypedRuleContext(ElementIncludesCodeValueConstraintContext,0);
};

ElementConstraintContext.prototype.elementBooleanConstraint = function() {
    return this.getTypedRuleContext(ElementBooleanConstraintContext,0);
};

ElementConstraintContext.prototype.elementTypeConstraint = function() {
    return this.getTypedRuleContext(ElementTypeConstraintContext,0);
};

ElementConstraintContext.prototype.elementIncludesTypeConstraint = function() {
    return this.getTypedRuleContext(ElementIncludesTypeConstraintContext,0);
};

ElementConstraintContext.prototype.elementUrlConstraint = function() {
    return this.getTypedRuleContext(ElementUrlConstraintContext,0);
};

ElementConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementConstraint(this);
	}
};

ElementConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementConstraint(this);
	}
};

ElementConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementConstraintContext = ElementConstraintContext;

SHRDataElementParser.prototype.elementConstraint = function() {

    var localctx = new ElementConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, SHRDataElementParser.RULE_elementConstraint);
    try {
        this.state = 395;
        var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 388;
            this.elementCodeVSConstraint();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 389;
            this.elementCodeValueConstraint();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 390;
            this.elementIncludesCodeValueConstraint();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 391;
            this.elementBooleanConstraint();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 392;
            this.elementTypeConstraint();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 393;
            this.elementIncludesTypeConstraint();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 394;
            this.elementUrlConstraint();
            break;

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

function ElementCodeVSConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementCodeVSConstraint;
    return this;
}

ElementCodeVSConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementCodeVSConstraintContext.prototype.constructor = ElementCodeVSConstraintContext;

ElementCodeVSConstraintContext.prototype.KW_FROM = function() {
    return this.getToken(SHRDataElementParser.KW_FROM, 0);
};

ElementCodeVSConstraintContext.prototype.valueset = function() {
    return this.getTypedRuleContext(ValuesetContext,0);
};

ElementCodeVSConstraintContext.prototype.KW_CODED_CONCEPT = function() {
    return this.getToken(SHRDataElementParser.KW_CODED_CONCEPT, 0);
};

ElementCodeVSConstraintContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

ElementCodeVSConstraintContext.prototype.OPEN_PAREN = function() {
    return this.getToken(SHRDataElementParser.OPEN_PAREN, 0);
};

ElementCodeVSConstraintContext.prototype.bindingInfix = function() {
    return this.getTypedRuleContext(BindingInfixContext,0);
};

ElementCodeVSConstraintContext.prototype.CLOSE_PAREN = function() {
    return this.getToken(SHRDataElementParser.CLOSE_PAREN, 0);
};

ElementCodeVSConstraintContext.prototype.KW_IF_COVERED = function() {
    return this.getToken(SHRDataElementParser.KW_IF_COVERED, 0);
};

ElementCodeVSConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementCodeVSConstraint(this);
	}
};

ElementCodeVSConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementCodeVSConstraint(this);
	}
};

ElementCodeVSConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementCodeVSConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementCodeVSConstraintContext = ElementCodeVSConstraintContext;

SHRDataElementParser.prototype.elementCodeVSConstraint = function() {

    var localctx = new ElementCodeVSConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, SHRDataElementParser.RULE_elementCodeVSConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 399;
        switch (this._input.LA(1)) {
        case SHRDataElementParser.KW_CODED_CONCEPT:
        	this.state = 397;
        	this.match(SHRDataElementParser.KW_CODED_CONCEPT);
        	break;
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
        case SHRDataElementParser.DOT_SEPARATED_UW:
        	this.state = 398;
        	this.simpleOrFQName();
        	break;
        case SHRDataElementParser.KW_FROM:
        	break;
        default:
        	throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 401;
        this.match(SHRDataElementParser.KW_FROM);
        this.state = 402;
        this.valueset();
        this.state = 404;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.OPEN_PAREN) {
            this.state = 403;
            this.match(SHRDataElementParser.OPEN_PAREN);
        }

        this.state = 407;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRDataElementParser.KW_REQUIRED) | (1 << SHRDataElementParser.KW_PREFERRED) | (1 << SHRDataElementParser.KW_EXAMPLE) | (1 << SHRDataElementParser.KW_EXTENSIBLE))) !== 0)) {
            this.state = 406;
            this.bindingInfix();
        }

        this.state = 410;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.CLOSE_PAREN) {
            this.state = 409;
            this.match(SHRDataElementParser.CLOSE_PAREN);
        }

        this.state = 413;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_IF_COVERED) {
            this.state = 412;
            this.match(SHRDataElementParser.KW_IF_COVERED);
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

function ElementCodeValueConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementCodeValueConstraint;
    return this;
}

ElementCodeValueConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementCodeValueConstraintContext.prototype.constructor = ElementCodeValueConstraintContext;

ElementCodeValueConstraintContext.prototype.EQUAL = function() {
    return this.getToken(SHRDataElementParser.EQUAL, 0);
};

ElementCodeValueConstraintContext.prototype.codeOrFQCode = function() {
    return this.getTypedRuleContext(CodeOrFQCodeContext,0);
};

ElementCodeValueConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementCodeValueConstraint(this);
	}
};

ElementCodeValueConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementCodeValueConstraint(this);
	}
};

ElementCodeValueConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementCodeValueConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementCodeValueConstraintContext = ElementCodeValueConstraintContext;

SHRDataElementParser.prototype.elementCodeValueConstraint = function() {

    var localctx = new ElementCodeValueConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, SHRDataElementParser.RULE_elementCodeValueConstraint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 415;
        this.match(SHRDataElementParser.EQUAL);
        this.state = 416;
        this.codeOrFQCode();
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

function ElementIncludesCodeValueConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementIncludesCodeValueConstraint;
    return this;
}

ElementIncludesCodeValueConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementIncludesCodeValueConstraintContext.prototype.constructor = ElementIncludesCodeValueConstraintContext;

ElementIncludesCodeValueConstraintContext.prototype.KW_INCLUDES = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRDataElementParser.KW_INCLUDES);
    } else {
        return this.getToken(SHRDataElementParser.KW_INCLUDES, i);
    }
};


ElementIncludesCodeValueConstraintContext.prototype.codeOrFQCode = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CodeOrFQCodeContext);
    } else {
        return this.getTypedRuleContext(CodeOrFQCodeContext,i);
    }
};

ElementIncludesCodeValueConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementIncludesCodeValueConstraint(this);
	}
};

ElementIncludesCodeValueConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementIncludesCodeValueConstraint(this);
	}
};

ElementIncludesCodeValueConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementIncludesCodeValueConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementIncludesCodeValueConstraintContext = ElementIncludesCodeValueConstraintContext;

SHRDataElementParser.prototype.elementIncludesCodeValueConstraint = function() {

    var localctx = new ElementIncludesCodeValueConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, SHRDataElementParser.RULE_elementIncludesCodeValueConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 420; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 418;
            this.match(SHRDataElementParser.KW_INCLUDES);
            this.state = 419;
            this.codeOrFQCode();
            this.state = 422; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SHRDataElementParser.KW_INCLUDES);
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

function ElementBooleanConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementBooleanConstraint;
    return this;
}

ElementBooleanConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementBooleanConstraintContext.prototype.constructor = ElementBooleanConstraintContext;

ElementBooleanConstraintContext.prototype.EQUAL = function() {
    return this.getToken(SHRDataElementParser.EQUAL, 0);
};

ElementBooleanConstraintContext.prototype.KW_TRUE = function() {
    return this.getToken(SHRDataElementParser.KW_TRUE, 0);
};

ElementBooleanConstraintContext.prototype.KW_FALSE = function() {
    return this.getToken(SHRDataElementParser.KW_FALSE, 0);
};

ElementBooleanConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementBooleanConstraint(this);
	}
};

ElementBooleanConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementBooleanConstraint(this);
	}
};

ElementBooleanConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementBooleanConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementBooleanConstraintContext = ElementBooleanConstraintContext;

SHRDataElementParser.prototype.elementBooleanConstraint = function() {

    var localctx = new ElementBooleanConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, SHRDataElementParser.RULE_elementBooleanConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 424;
        this.match(SHRDataElementParser.EQUAL);
        this.state = 425;
        _la = this._input.LA(1);
        if(!(_la===SHRDataElementParser.KW_TRUE || _la===SHRDataElementParser.KW_FALSE)) {
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

function ElementTypeConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementTypeConstraint;
    return this;
}

ElementTypeConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementTypeConstraintContext.prototype.constructor = ElementTypeConstraintContext;

ElementTypeConstraintContext.prototype.KW_SUBSTITUTE = function() {
    return this.getToken(SHRDataElementParser.KW_SUBSTITUTE, 0);
};

ElementTypeConstraintContext.prototype.KW_ONLY = function() {
    return this.getToken(SHRDataElementParser.KW_ONLY, 0);
};

ElementTypeConstraintContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

ElementTypeConstraintContext.prototype.primitive = function() {
    return this.getTypedRuleContext(PrimitiveContext,0);
};

ElementTypeConstraintContext.prototype.tbd = function() {
    return this.getTypedRuleContext(TbdContext,0);
};

ElementTypeConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementTypeConstraint(this);
	}
};

ElementTypeConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementTypeConstraint(this);
	}
};

ElementTypeConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementTypeConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementTypeConstraintContext = ElementTypeConstraintContext;

SHRDataElementParser.prototype.elementTypeConstraint = function() {

    var localctx = new ElementTypeConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, SHRDataElementParser.RULE_elementTypeConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 427;
        _la = this._input.LA(1);
        if(!(_la===SHRDataElementParser.KW_SUBSTITUTE || _la===SHRDataElementParser.KW_ONLY)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 431;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
        case SHRDataElementParser.DOT_SEPARATED_UW:
            this.state = 428;
            this.simpleOrFQName();
            break;
        case SHRDataElementParser.KW_CODED_CONCEPT:
        case SHRDataElementParser.KW_BOOLEAN:
        case SHRDataElementParser.KW_INTEGER:
        case SHRDataElementParser.KW_STRING:
        case SHRDataElementParser.KW_DECIMAL:
        case SHRDataElementParser.KW_URI:
        case SHRDataElementParser.KW_BASE64_BINARY:
        case SHRDataElementParser.KW_INSTANT:
        case SHRDataElementParser.KW_DATE:
        case SHRDataElementParser.KW_DATE_TIME:
        case SHRDataElementParser.KW_TIME:
        case SHRDataElementParser.KW_CONCEPT_CODE:
        case SHRDataElementParser.KW_OID:
        case SHRDataElementParser.KW_ID:
        case SHRDataElementParser.KW_MARKDOWN:
        case SHRDataElementParser.KW_UNSIGNED_INT:
        case SHRDataElementParser.KW_POSITIVE_INT:
        case SHRDataElementParser.KW_XHTML:
            this.state = 429;
            this.primitive();
            break;
        case SHRDataElementParser.KW_TBD:
            this.state = 430;
            this.tbd();
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

function ElementUrlConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementUrlConstraint;
    return this;
}

ElementUrlConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementUrlConstraintContext.prototype.constructor = ElementUrlConstraintContext;

ElementUrlConstraintContext.prototype.EQUAL = function() {
    return this.getToken(SHRDataElementParser.EQUAL, 0);
};

ElementUrlConstraintContext.prototype.URL = function() {
    return this.getToken(SHRDataElementParser.URL, 0);
};

ElementUrlConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementUrlConstraint(this);
	}
};

ElementUrlConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementUrlConstraint(this);
	}
};

ElementUrlConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementUrlConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementUrlConstraintContext = ElementUrlConstraintContext;

SHRDataElementParser.prototype.elementUrlConstraint = function() {

    var localctx = new ElementUrlConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, SHRDataElementParser.RULE_elementUrlConstraint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 433;
        this.match(SHRDataElementParser.EQUAL);
        this.state = 434;
        this.match(SHRDataElementParser.URL);
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

function ElementIncludesTypeConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementIncludesTypeConstraint;
    return this;
}

ElementIncludesTypeConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementIncludesTypeConstraintContext.prototype.constructor = ElementIncludesTypeConstraintContext;

ElementIncludesTypeConstraintContext.prototype.KW_INCLUDES = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRDataElementParser.KW_INCLUDES);
    } else {
        return this.getToken(SHRDataElementParser.KW_INCLUDES, i);
    }
};


ElementIncludesTypeConstraintContext.prototype.typeConstraint = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TypeConstraintContext);
    } else {
        return this.getTypedRuleContext(TypeConstraintContext,i);
    }
};

ElementIncludesTypeConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementIncludesTypeConstraint(this);
	}
};

ElementIncludesTypeConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementIncludesTypeConstraint(this);
	}
};

ElementIncludesTypeConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementIncludesTypeConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementIncludesTypeConstraintContext = ElementIncludesTypeConstraintContext;

SHRDataElementParser.prototype.elementIncludesTypeConstraint = function() {

    var localctx = new ElementIncludesTypeConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, SHRDataElementParser.RULE_elementIncludesTypeConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 438; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 436;
            this.match(SHRDataElementParser.KW_INCLUDES);
            this.state = 437;
            this.typeConstraint();
            this.state = 440; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SHRDataElementParser.KW_INCLUDES);
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

function ValuesetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_valueset;
    return this;
}

ValuesetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetContext.prototype.constructor = ValuesetContext;

ValuesetContext.prototype.URL = function() {
    return this.getToken(SHRDataElementParser.URL, 0);
};

ValuesetContext.prototype.PATH_URL = function() {
    return this.getToken(SHRDataElementParser.PATH_URL, 0);
};

ValuesetContext.prototype.URN_OID = function() {
    return this.getToken(SHRDataElementParser.URN_OID, 0);
};

ValuesetContext.prototype.simpleName = function() {
    return this.getTypedRuleContext(SimpleNameContext,0);
};

ValuesetContext.prototype.tbd = function() {
    return this.getTypedRuleContext(TbdContext,0);
};

ValuesetContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterValueset(this);
	}
};

ValuesetContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitValueset(this);
	}
};

ValuesetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitValueset(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ValuesetContext = ValuesetContext;

SHRDataElementParser.prototype.valueset = function() {

    var localctx = new ValuesetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, SHRDataElementParser.RULE_valueset);
    try {
        this.state = 447;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.URL:
            this.enterOuterAlt(localctx, 1);
            this.state = 442;
            this.match(SHRDataElementParser.URL);
            break;
        case SHRDataElementParser.PATH_URL:
            this.enterOuterAlt(localctx, 2);
            this.state = 443;
            this.match(SHRDataElementParser.PATH_URL);
            break;
        case SHRDataElementParser.URN_OID:
            this.enterOuterAlt(localctx, 3);
            this.state = 444;
            this.match(SHRDataElementParser.URN_OID);
            break;
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
            this.enterOuterAlt(localctx, 4);
            this.state = 445;
            this.simpleName();
            break;
        case SHRDataElementParser.KW_TBD:
            this.enterOuterAlt(localctx, 5);
            this.state = 446;
            this.tbd();
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

function PrimitiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_primitive;
    return this;
}

PrimitiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimitiveContext.prototype.constructor = PrimitiveContext;

PrimitiveContext.prototype.KW_BOOLEAN = function() {
    return this.getToken(SHRDataElementParser.KW_BOOLEAN, 0);
};

PrimitiveContext.prototype.KW_INTEGER = function() {
    return this.getToken(SHRDataElementParser.KW_INTEGER, 0);
};

PrimitiveContext.prototype.KW_STRING = function() {
    return this.getToken(SHRDataElementParser.KW_STRING, 0);
};

PrimitiveContext.prototype.KW_DECIMAL = function() {
    return this.getToken(SHRDataElementParser.KW_DECIMAL, 0);
};

PrimitiveContext.prototype.KW_URI = function() {
    return this.getToken(SHRDataElementParser.KW_URI, 0);
};

PrimitiveContext.prototype.KW_BASE64_BINARY = function() {
    return this.getToken(SHRDataElementParser.KW_BASE64_BINARY, 0);
};

PrimitiveContext.prototype.KW_INSTANT = function() {
    return this.getToken(SHRDataElementParser.KW_INSTANT, 0);
};

PrimitiveContext.prototype.KW_DATE = function() {
    return this.getToken(SHRDataElementParser.KW_DATE, 0);
};

PrimitiveContext.prototype.KW_DATE_TIME = function() {
    return this.getToken(SHRDataElementParser.KW_DATE_TIME, 0);
};

PrimitiveContext.prototype.KW_TIME = function() {
    return this.getToken(SHRDataElementParser.KW_TIME, 0);
};

PrimitiveContext.prototype.KW_CONCEPT_CODE = function() {
    return this.getToken(SHRDataElementParser.KW_CONCEPT_CODE, 0);
};

PrimitiveContext.prototype.KW_OID = function() {
    return this.getToken(SHRDataElementParser.KW_OID, 0);
};

PrimitiveContext.prototype.KW_ID = function() {
    return this.getToken(SHRDataElementParser.KW_ID, 0);
};

PrimitiveContext.prototype.KW_MARKDOWN = function() {
    return this.getToken(SHRDataElementParser.KW_MARKDOWN, 0);
};

PrimitiveContext.prototype.KW_UNSIGNED_INT = function() {
    return this.getToken(SHRDataElementParser.KW_UNSIGNED_INT, 0);
};

PrimitiveContext.prototype.KW_POSITIVE_INT = function() {
    return this.getToken(SHRDataElementParser.KW_POSITIVE_INT, 0);
};

PrimitiveContext.prototype.KW_XHTML = function() {
    return this.getToken(SHRDataElementParser.KW_XHTML, 0);
};

PrimitiveContext.prototype.KW_CODED_CONCEPT = function() {
    return this.getToken(SHRDataElementParser.KW_CODED_CONCEPT, 0);
};

PrimitiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterPrimitive(this);
	}
};

PrimitiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitPrimitive(this);
	}
};

PrimitiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitPrimitive(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.PrimitiveContext = PrimitiveContext;

SHRDataElementParser.prototype.primitive = function() {

    var localctx = new PrimitiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, SHRDataElementParser.RULE_primitive);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 449;
        _la = this._input.LA(1);
        if(!(((((_la - 31)) & ~0x1f) == 0 && ((1 << (_la - 31)) & ((1 << (SHRDataElementParser.KW_CODED_CONCEPT - 31)) | (1 << (SHRDataElementParser.KW_BOOLEAN - 31)) | (1 << (SHRDataElementParser.KW_INTEGER - 31)) | (1 << (SHRDataElementParser.KW_STRING - 31)) | (1 << (SHRDataElementParser.KW_DECIMAL - 31)) | (1 << (SHRDataElementParser.KW_URI - 31)) | (1 << (SHRDataElementParser.KW_BASE64_BINARY - 31)) | (1 << (SHRDataElementParser.KW_INSTANT - 31)) | (1 << (SHRDataElementParser.KW_DATE - 31)) | (1 << (SHRDataElementParser.KW_DATE_TIME - 31)) | (1 << (SHRDataElementParser.KW_TIME - 31)) | (1 << (SHRDataElementParser.KW_CONCEPT_CODE - 31)) | (1 << (SHRDataElementParser.KW_OID - 31)) | (1 << (SHRDataElementParser.KW_ID - 31)))) !== 0) || ((((_la - 63)) & ~0x1f) == 0 && ((1 << (_la - 63)) & ((1 << (SHRDataElementParser.KW_MARKDOWN - 63)) | (1 << (SHRDataElementParser.KW_UNSIGNED_INT - 63)) | (1 << (SHRDataElementParser.KW_POSITIVE_INT - 63)) | (1 << (SHRDataElementParser.KW_XHTML - 63)))) !== 0))) {
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

function CountContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_count;
    return this;
}

CountContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CountContext.prototype.constructor = CountContext;

CountContext.prototype.WHOLE_NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRDataElementParser.WHOLE_NUMBER);
    } else {
        return this.getToken(SHRDataElementParser.WHOLE_NUMBER, i);
    }
};


CountContext.prototype.RANGE = function() {
    return this.getToken(SHRDataElementParser.RANGE, 0);
};

CountContext.prototype.STAR = function() {
    return this.getToken(SHRDataElementParser.STAR, 0);
};

CountContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterCount(this);
	}
};

CountContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitCount(this);
	}
};

CountContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitCount(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.CountContext = CountContext;

SHRDataElementParser.prototype.count = function() {

    var localctx = new CountContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, SHRDataElementParser.RULE_count);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 451;
        this.match(SHRDataElementParser.WHOLE_NUMBER);
        this.state = 452;
        this.match(SHRDataElementParser.RANGE);
        this.state = 453;
        _la = this._input.LA(1);
        if(!(_la===SHRDataElementParser.STAR || _la===SHRDataElementParser.WHOLE_NUMBER)) {
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

function TbdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_tbd;
    return this;
}

TbdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TbdContext.prototype.constructor = TbdContext;

TbdContext.prototype.KW_TBD = function() {
    return this.getToken(SHRDataElementParser.KW_TBD, 0);
};

TbdContext.prototype.STRING = function() {
    return this.getToken(SHRDataElementParser.STRING, 0);
};

TbdContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterTbd(this);
	}
};

TbdContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitTbd(this);
	}
};

TbdContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitTbd(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.TbdContext = TbdContext;

SHRDataElementParser.prototype.tbd = function() {

    var localctx = new TbdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, SHRDataElementParser.RULE_tbd);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 455;
        this.match(SHRDataElementParser.KW_TBD);
        this.state = 457;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.STRING) {
            this.state = 456;
            this.match(SHRDataElementParser.STRING);
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

function TbdCodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_tbdCode;
    return this;
}

TbdCodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TbdCodeContext.prototype.constructor = TbdCodeContext;

TbdCodeContext.prototype.KW_TBD_CODE = function() {
    return this.getToken(SHRDataElementParser.KW_TBD_CODE, 0);
};

TbdCodeContext.prototype.STRING = function() {
    return this.getToken(SHRDataElementParser.STRING, 0);
};

TbdCodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterTbdCode(this);
	}
};

TbdCodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitTbdCode(this);
	}
};

TbdCodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitTbdCode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.TbdCodeContext = TbdCodeContext;

SHRDataElementParser.prototype.tbdCode = function() {

    var localctx = new TbdCodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 108, SHRDataElementParser.RULE_tbdCode);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 459;
        this.match(SHRDataElementParser.KW_TBD_CODE);
        this.state = 461;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.STRING) {
            this.state = 460;
            this.match(SHRDataElementParser.STRING);
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


exports.SHRDataElementParser = SHRDataElementParser;

// Generated from SHRDataElementParser.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SHRDataElementParserListener = require('./SHRDataElementParserListener').SHRDataElementParserListener;
var SHRDataElementParserVisitor = require('./SHRDataElementParserVisitor').SHRDataElementParserVisitor;

var grammarFileName = "SHRDataElementParser.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3L\u01a2\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4",
    "\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t",
    "\20\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27",
    "\t\27\4\30\t\30\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4",
    "\36\t\36\4\37\t\37\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t",
    "\'\4(\t(\4)\t)\4*\t*\4+\t+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t",
    "\61\4\62\t\62\4\63\t\63\4\64\t\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t",
    "8\49\t9\3\2\3\2\5\2u\n\2\3\2\5\2x\n\2\3\2\5\2{\n\2\3\2\5\2~\n\2\3\2",
    "\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\7\4\u008c\n\4\f\4\16\4",
    "\u008f\13\4\3\5\6\5\u0092\n\5\r\5\16\5\u0093\3\6\3\6\3\6\3\6\3\6\3\7",
    "\6\7\u009c\n\7\r\7\16\7\u009d\3\b\3\b\3\b\3\b\3\b\3\t\7\t\u00a6\n\t",
    "\f\t\16\t\u00a9\13\t\3\n\3\n\3\n\5\n\u00ae\n\n\3\13\3\13\5\13\u00b2",
    "\n\13\3\13\3\13\3\f\3\f\3\f\3\r\3\r\5\r\u00bb\n\r\3\r\3\r\3\16\3\16",
    "\3\16\3\17\3\17\5\17\u00c4\n\17\3\17\3\17\3\20\3\20\3\20\3\21\6\21\u00cc",
    "\n\21\r\21\16\21\u00cd\3\22\3\22\3\22\5\22\u00d3\n\22\3\23\5\23\u00d6",
    "\n\23\3\23\7\23\u00d9\n\23\f\23\16\23\u00dc\13\23\3\24\3\24\3\24\3\24",
    "\3\24\7\24\u00e3\n\24\f\24\16\24\u00e6\13\24\3\25\3\25\3\25\3\25\5\25",
    "\u00ec\n\25\3\26\3\26\5\26\u00f0\n\26\3\27\3\27\3\27\3\27\3\30\3\30",
    "\3\30\5\30\u00f9\n\30\3\31\3\31\3\31\5\31\u00fe\n\31\3\32\3\32\3\32",
    "\5\32\u0103\n\32\3\33\3\33\3\33\7\33\u0108\n\33\f\33\16\33\u010b\13",
    "\33\3\34\3\34\3\34\3\35\3\35\3\35\3\35\3\36\3\36\3\37\3\37\3 \3 \3!",
    "\3!\3\"\3\"\5\"\u011e\n\"\3#\3#\5#\u0122\n#\3$\3$\3$\5$\u0127\n$\3%",
    "\3%\5%\u012b\n%\3&\3&\3\'\3\'\3\'\5\'\u0132\n\'\3\'\3\'\3(\3(\3(\3(",
    "\5(\u013a\n(\3(\3(\5(\u013e\n(\3)\3)\5)\u0142\n)\3*\3*\3*\5*\u0147\n",
    "*\3*\3*\3+\3+\3+\7+\u014e\n+\f+\16+\u0151\13+\3,\3,\7,\u0155\n,\f,\16",
    ",\u0158\13,\3,\7,\u015b\n,\f,\16,\u015e\13,\3-\3-\3-\3-\3-\3-\3-\5-",
    "\u0167\n-\3.\3.\3.\3.\3.\3.\5.\u016f\n.\3/\3/\3/\3\60\3\60\3\60\6\60",
    "\u0177\n\60\r\60\16\60\u0178\3\61\3\61\3\61\3\62\3\62\3\62\3\62\5\62",
    "\u0182\n\62\3\63\3\63\3\63\3\64\3\64\6\64\u0189\n\64\r\64\16\64\u018a",
    "\3\65\3\65\3\65\3\65\3\65\5\65\u0192\n\65\3\66\3\66\3\67\3\67\3\67\3",
    "\67\38\38\58\u019c\n8\39\39\59\u01a0\n9\39\2\2:\2\4\6\b\n\f\16\20\22",
    "\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhjl",
    "np\2\13\4\2,,./\3\2EF\4\2\r\r  \3\2CE\3\2\23\26\3\2\33\34\4\2\31\31",
    "\37\37\3\2\61A\4\2$$BB\u01a6\2r\3\2\2\2\4\u0081\3\2\2\2\6\u0087\3\2",
    "\2\2\b\u0091\3\2\2\2\n\u0095\3\2\2\2\f\u009b\3\2\2\2\16\u009f\3\2\2",
    "\2\20\u00a7\3\2\2\2\22\u00ad\3\2\2\2\24\u00af\3\2\2\2\26\u00b5\3\2\2",
    "\2\30\u00b8\3\2\2\2\32\u00be\3\2\2\2\34\u00c1\3\2\2\2\36\u00c7\3\2\2",
    "\2 \u00cb\3\2\2\2\"\u00d2\3\2\2\2$\u00d5\3\2\2\2&\u00dd\3\2\2\2(\u00eb",
    "\3\2\2\2*\u00ef\3\2\2\2,\u00f1\3\2\2\2.\u00f8\3\2\2\2\60\u00fa\3\2\2",
    "\2\62\u00ff\3\2\2\2\64\u0104\3\2\2\2\66\u010c\3\2\2\28\u010f\3\2\2\2",
    ":\u0113\3\2\2\2<\u0115\3\2\2\2>\u0117\3\2\2\2@\u0119\3\2\2\2B\u011d",
    "\3\2\2\2D\u011f\3\2\2\2F\u0126\3\2\2\2H\u012a\3\2\2\2J\u012c\3\2\2\2",
    "L\u0131\3\2\2\2N\u0139\3\2\2\2P\u0141\3\2\2\2R\u0143\3\2\2\2T\u014a",
    "\3\2\2\2V\u0152\3\2\2\2X\u0166\3\2\2\2Z\u0168\3\2\2\2\\\u0170\3\2\2",
    "\2^\u0176\3\2\2\2`\u017a\3\2\2\2b\u017d\3\2\2\2d\u0183\3\2\2\2f\u0188",
    "\3\2\2\2h\u0191\3\2\2\2j\u0193\3\2\2\2l\u0195\3\2\2\2n\u0199\3\2\2\2",
    "p\u019d\3\2\2\2rt\5\4\3\2su\5\66\34\2ts\3\2\2\2tu\3\2\2\2uw\3\2\2\2",
    "vx\5\6\4\2wv\3\2\2\2wx\3\2\2\2xz\3\2\2\2y{\5\b\5\2zy\3\2\2\2z{\3\2\2",
    "\2{}\3\2\2\2|~\5\f\7\2}|\3\2\2\2}~\3\2\2\2~\177\3\2\2\2\177\u0080\5",
    "\20\t\2\u0080\3\3\2\2\2\u0081\u0082\7\3\2\2\u0082\u0083\7\4\2\2\u0083",
    "\u0084\58\35\2\u0084\u0085\7\5\2\2\u0085\u0086\5:\36\2\u0086\5\3\2\2",
    "\2\u0087\u0088\7\6\2\2\u0088\u008d\5:\36\2\u0089\u008a\7#\2\2\u008a",
    "\u008c\5:\36\2\u008b\u0089\3\2\2\2\u008c\u008f\3\2\2\2\u008d\u008b\3",
    "\2\2\2\u008d\u008e\3\2\2\2\u008e\7\3\2\2\2\u008f\u008d\3\2\2\2\u0090",
    "\u0092\5\n\6\2\u0091\u0090\3\2\2\2\u0092\u0093\3\2\2\2\u0093\u0091\3",
    "\2\2\2\u0093\u0094\3\2\2\2\u0094\t\3\2\2\2\u0095\u0096\7\7\2\2\u0096",
    "\u0097\7C\2\2\u0097\u0098\7\"\2\2\u0098\u0099\7,\2\2\u0099\13\3\2\2",
    "\2\u009a\u009c\5\16\b\2\u009b\u009a\3\2\2\2\u009c\u009d\3\2\2\2\u009d",
    "\u009b\3\2\2\2\u009d\u009e\3\2\2\2\u009e\r\3\2\2\2\u009f\u00a0\7\b\2",
    "\2\u00a0\u00a1\7C\2\2\u00a1\u00a2\7\"\2\2\u00a2\u00a3\t\2\2\2\u00a3",
    "\17\3\2\2\2\u00a4\u00a6\5\22\n\2\u00a5\u00a4\3\2\2\2\u00a6\u00a9\3\2",
    "\2\2\u00a7\u00a5\3\2\2\2\u00a7\u00a8\3\2\2\2\u00a8\21\3\2\2\2\u00a9",
    "\u00a7\3\2\2\2\u00aa\u00ae\5\24\13\2\u00ab\u00ae\5\30\r\2\u00ac\u00ae",
    "\5\34\17\2\u00ad\u00aa\3\2\2\2\u00ad\u00ab\3\2\2\2\u00ad\u00ac\3\2\2",
    "\2\u00ae\23\3\2\2\2\u00af\u00b1\5\26\f\2\u00b0\u00b2\5 \21\2\u00b1\u00b0",
    "\3\2\2\2\u00b1\u00b2\3\2\2\2\u00b2\u00b3\3\2\2\2\u00b3\u00b4\5$\23\2",
    "\u00b4\25\3\2\2\2\u00b5\u00b6\7\n\2\2\u00b6\u00b7\5> \2\u00b7\27\3\2",
    "\2\2\u00b8\u00ba\5\32\16\2\u00b9\u00bb\5 \21\2\u00ba\u00b9\3\2\2\2\u00ba",
    "\u00bb\3\2\2\2\u00bb\u00bc\3\2\2\2\u00bc\u00bd\5$\23\2\u00bd\31\3\2",
    "\2\2\u00be\u00bf\7\13\2\2\u00bf\u00c0\5> \2\u00c0\33\3\2\2\2\u00c1\u00c3",
    "\5\36\20\2\u00c2\u00c4\5 \21\2\u00c3\u00c2\3\2\2\2\u00c3\u00c4\3\2\2",
    "\2\u00c4\u00c5\3\2\2\2\u00c5\u00c6\5$\23\2\u00c6\35\3\2\2\2\u00c7\u00c8",
    "\7\t\2\2\u00c8\u00c9\5> \2\u00c9\37\3\2\2\2\u00ca\u00cc\5\"\22\2\u00cb",
    "\u00ca\3\2\2\2\u00cc\u00cd\3\2\2\2\u00cd\u00cb\3\2\2\2\u00cd\u00ce\3",
    "\2\2\2\u00ce!\3\2\2\2\u00cf\u00d3\5\60\31\2\u00d0\u00d3\5\62\32\2\u00d1",
    "\u00d3\5\66\34\2\u00d2\u00cf\3\2\2\2\u00d2\u00d0\3\2\2\2\u00d2\u00d1",
    "\3\2\2\2\u00d3#\3\2\2\2\u00d4\u00d6\5&\24\2\u00d5\u00d4\3\2\2\2\u00d5",
    "\u00d6\3\2\2\2\u00d6\u00da\3\2\2\2\u00d7\u00d9\5*\26\2\u00d8\u00d7\3",
    "\2\2\2\u00d9\u00dc\3\2\2\2\u00da\u00d8\3\2\2\2\u00da\u00db\3\2\2\2\u00db",
    "%\3\2\2\2\u00dc\u00da\3\2\2\2\u00dd\u00de\7\r\2\2\u00de\u00df\7)\2\2",
    "\u00df\u00e4\5(\25\2\u00e0\u00e1\7\21\2\2\u00e1\u00e3\5(\25\2\u00e2",
    "\u00e0\3\2\2\2\u00e3\u00e6\3\2\2\2\u00e4\u00e2\3\2\2\2\u00e4\u00e5\3",
    "\2\2\2\u00e5\'\3\2\2\2\u00e6\u00e4\3\2\2\2\u00e7\u00ec\5B\"\2\u00e8",
    "\u00ec\5j\66\2\u00e9\u00ec\5N(\2\u00ea\u00ec\5n8\2\u00eb\u00e7\3\2\2",
    "\2\u00eb\u00e8\3\2\2\2\u00eb\u00e9\3\2\2\2\u00eb\u00ea\3\2\2\2\u00ec",
    ")\3\2\2\2\u00ed\u00f0\5,\27\2\u00ee\u00f0\5N(\2\u00ef\u00ed\3\2\2\2",
    "\u00ef\u00ee\3\2\2\2\u00f0+\3\2\2\2\u00f1\u00f2\7\20\2\2\u00f2\u00f3",
    "\5.\30\2\u00f3\u00f4\5l\67\2\u00f4-\3\2\2\2\u00f5\u00f9\5<\37\2\u00f6",
    "\u00f9\5B\"\2\u00f7\u00f9\5n8\2\u00f8\u00f5\3\2\2\2\u00f8\u00f6\3\2",
    "\2\2\u00f8\u00f7\3\2\2\2\u00f9/\3\2\2\2\u00fa\u00fd\7\f\2\2\u00fb\u00fe",
    "\5B\"\2\u00fc\u00fe\5n8\2\u00fd\u00fb\3\2\2\2\u00fd\u00fc\3\2\2\2\u00fe",
    "\61\3\2\2\2\u00ff\u0102\7\16\2\2\u0100\u0103\5\64\33\2\u0101\u0103\5",
    "n8\2\u0102\u0100\3\2\2\2\u0102\u0101\3\2\2\2\u0103\63\3\2\2\2\u0104",
    "\u0109\5F$\2\u0105\u0106\7#\2\2\u0106\u0108\5F$\2\u0107\u0105\3\2\2",
    "\2\u0108\u010b\3\2\2\2\u0109\u0107\3\2\2\2\u0109\u010a\3\2\2\2\u010a",
    "\65\3\2\2\2\u010b\u0109\3\2\2\2\u010c\u010d\7\17\2\2\u010d\u010e\7H",
    "\2\2\u010e\67\3\2\2\2\u010f\u0110\7B\2\2\u0110\u0111\7!\2\2\u0111\u0112",
    "\7B\2\2\u01129\3\2\2\2\u0113\u0114\t\3\2\2\u0114;\3\2\2\2\u0115\u0116",
    "\t\4\2\2\u0116=\3\2\2\2\u0117\u0118\t\5\2\2\u0118?\3\2\2\2\u0119\u011a",
    "\7G\2\2\u011aA\3\2\2\2\u011b\u011e\5> \2\u011c\u011e\5@!\2\u011d\u011b",
    "\3\2\2\2\u011d\u011c\3\2\2\2\u011eC\3\2\2\2\u011f\u0121\7\60\2\2\u0120",
    "\u0122\7H\2\2\u0121\u0120\3\2\2\2\u0121\u0122\3\2\2\2\u0122E\3\2\2\2",
    "\u0123\u0124\7C\2\2\u0124\u0127\5D#\2\u0125\u0127\5p9\2\u0126\u0123",
    "\3\2\2\2\u0126\u0125\3\2\2\2\u0127G\3\2\2\2\u0128\u012b\5F$\2\u0129",
    "\u012b\5D#\2\u012a\u0128\3\2\2\2\u012a\u0129\3\2\2\2\u012bI\3\2\2\2",
    "\u012c\u012d\t\6\2\2\u012dK\3\2\2\2\u012e\u0132\5B\"\2\u012f\u0132\5",
    "j\66\2\u0130\u0132\5n8\2\u0131\u012e\3\2\2\2\u0131\u012f\3\2\2\2\u0131",
    "\u0130\3\2\2\2\u0132\u0133\3\2\2\2\u0133\u0134\5l\67\2\u0134M\3\2\2",
    "\2\u0135\u013a\5<\37\2\u0136\u013a\5B\"\2\u0137\u013a\5V,\2\u0138\u013a",
    "\5j\66\2\u0139\u0135\3\2\2\2\u0139\u0136\3\2\2\2\u0139\u0137\3\2\2\2",
    "\u0139\u0138\3\2\2\2\u013a\u013d\3\2\2\2\u013b\u013e\5l\67\2\u013c\u013e",
    "\5X-\2\u013d\u013b\3\2\2\2\u013d\u013c\3\2\2\2\u013d\u013e\3\2\2\2\u013e",
    "O\3\2\2\2\u013f\u0142\5<\37\2\u0140\u0142\5B\"\2\u0141\u013f\3\2\2\2",
    "\u0141\u0140\3\2\2\2\u0142Q\3\2\2\2\u0143\u0146\7*\2\2\u0144\u0147\5",
    "> \2\u0145\u0147\5j\66\2\u0146\u0144\3\2\2\2\u0146\u0145\3\2\2\2\u0147",
    "\u0148\3\2\2\2\u0148\u0149\7+\2\2\u0149S\3\2\2\2\u014a\u014b\7!\2\2",
    "\u014b\u014f\5> \2\u014c\u014e\5R*\2\u014d\u014c\3\2\2\2\u014e\u0151",
    "\3\2\2\2\u014f\u014d\3\2\2\2\u014f\u0150\3\2\2\2\u0150U\3\2\2\2\u0151",
    "\u014f\3\2\2\2\u0152\u0156\5P)\2\u0153\u0155\5R*\2\u0154\u0153\3\2\2",
    "\2\u0155\u0158\3\2\2\2\u0156\u0154\3\2\2\2\u0156\u0157\3\2\2\2\u0157",
    "\u015c\3\2\2\2\u0158\u0156\3\2\2\2\u0159\u015b\5T+\2\u015a\u0159\3\2",
    "\2\2\u015b\u015e\3\2\2\2\u015c\u015a\3\2\2\2\u015c\u015d\3\2\2\2\u015d",
    "W\3\2\2\2\u015e\u015c\3\2\2\2\u015f\u0167\5Z.\2\u0160\u0167\5\\/\2\u0161",
    "\u0167\5^\60\2\u0162\u0167\5`\61\2\u0163\u0167\5b\62\2\u0164\u0167\5",
    "f\64\2\u0165\u0167\5d\63\2\u0166\u015f\3\2\2\2\u0166\u0160\3\2\2\2\u0166",
    "\u0161\3\2\2\2\u0166\u0162\3\2\2\2\u0166\u0163\3\2\2\2\u0166\u0164\3",
    "\2\2\2\u0166\u0165\3\2\2\2\u0167Y\3\2\2\2\u0168\u0169\7\27\2\2\u0169",
    "\u016e\5h\65\2\u016a\u016b\7%\2\2\u016b\u016c\5J&\2\u016c\u016d\7&\2",
    "\2\u016d\u016f\3\2\2\2\u016e\u016a\3\2\2\2\u016e\u016f\3\2\2\2\u016f",
    "[\3\2\2\2\u0170\u0171\7\"\2\2\u0171\u0172\5F$\2\u0172]\3\2\2\2\u0173",
    "\u0174\7(\2\2\u0174\u0175\7\"\2\2\u0175\u0177\5F$\2\u0176\u0173\3\2",
    "\2\2\u0177\u0178\3\2\2\2\u0178\u0176\3\2\2\2\u0178\u0179\3\2\2\2\u0179",
    "_\3\2\2\2\u017a\u017b\7\"\2\2\u017b\u017c\t\7\2\2\u017ca\3\2\2\2\u017d",
    "\u0181\t\b\2\2\u017e\u0182\5B\"\2\u017f\u0182\5j\66\2\u0180\u0182\5",
    "n8\2\u0181\u017e\3\2\2\2\u0181\u017f\3\2\2\2\u0181\u0180\3\2\2\2\u0182",
    "c\3\2\2\2\u0183\u0184\7\"\2\2\u0184\u0185\7,\2\2\u0185e\3\2\2\2\u0186",
    "\u0187\7\32\2\2\u0187\u0189\5L\'\2\u0188\u0186\3\2\2\2\u0189\u018a\3",
    "\2\2\2\u018a\u0188\3\2\2\2\u018a\u018b\3\2\2\2\u018bg\3\2\2\2\u018c",
    "\u0192\7,\2\2\u018d\u0192\7-\2\2\u018e\u0192\7.\2\2\u018f\u0192\5> ",
    "\2\u0190\u0192\5n8\2\u0191\u018c\3\2\2\2\u0191\u018d\3\2\2\2\u0191\u018e",
    "\3\2\2\2\u0191\u018f\3\2\2\2\u0191\u0190\3\2\2\2\u0192i\3\2\2\2\u0193",
    "\u0194\t\t\2\2\u0194k\3\2\2\2\u0195\u0196\7B\2\2\u0196\u0197\7\'\2\2",
    "\u0197\u0198\t\n\2\2\u0198m\3\2\2\2\u0199\u019b\7\35\2\2\u019a\u019c",
    "\7H\2\2\u019b\u019a\3\2\2\2\u019b\u019c\3\2\2\2\u019co\3\2\2\2\u019d",
    "\u019f\7\36\2\2\u019e\u01a0\7H\2\2\u019f\u019e\3\2\2\2\u019f\u01a0\3",
    "\2\2\2\u01a0q\3\2\2\2-twz}\u008d\u0093\u009d\u00a7\u00ad\u00b1\u00ba",
    "\u00c3\u00cd\u00d2\u00d5\u00da\u00e4\u00eb\u00ef\u00f8\u00fd\u0102\u0109",
    "\u011d\u0121\u0126\u012a\u0131\u0139\u013d\u0141\u0146\u014f\u0156\u015c",
    "\u0166\u016e\u0178\u0181\u018a\u0191\u019b\u019f"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'Grammar:'", "'DataElement'", "'Namespace:'", 
                     "'Uses:'", "'Path:'", "'CodeSystem:'", "'Abstract:'", 
                     "'Element:'", "'Entry:'", "'Parent:'", "'Value'", "'Concept:'", 
                     "'Description:'", "'Property:'", "'or'", "'with'", 
                     "'required'", "'preferred'", "'example'", "'extensible'", 
                     "'from'", "'is'", "'substitute'", "'includes'", "'true'", 
                     "'false'", "'TBD'", "'TBD#TBD'", "'only'", "'_Entry'", 
                     "'.'", "'='", "','", "'*'", "'('", "')'", "'..'", "'+'", 
                     "':'", "'['", "']'", 'null', 'null', 'null', 'null', 
                     'null', "'boolean'", "'integer'", "'string'", "'decimal'", 
                     "'uri'", "'base64Binary'", "'instant'", "'date'", "'dateTime'", 
                     "'time'", "'concept'", "'oid'", "'id'", "'markdown'", 
                     "'unsignedInt'", "'positiveInt'", "'xhtml'", 'null', 
                     'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                     "'\n'" ];

var symbolicNames = [ 'null', "KW_GRAMMAR", "KW_G_DATA_ELEMENT", "KW_NAMESPACE", 
                      "KW_USES", "KW_PATH", "KW_VOCABULARY", "KW_ABSTRACT", 
                      "KW_ELEMENT", "KW_ENTRY", "KW_PARENT", "KW_VALUE", 
                      "KW_CONCEPT", "KW_DESCRIPTION", "KW_PROPERTY", "KW_OR", 
                      "KW_WITH", "KW_REQUIRED", "KW_PREFERRED", "KW_EXAMPLE", 
                      "KW_EXTENSIBLE", "KW_FROM", "KW_IS", "KW_SUBSTITUTE", 
                      "KW_INCLUDES", "KW_TRUE", "KW_FALSE", "KW_TBD", "KW_TBD_CODE", 
                      "KW_ONLY", "KW_BAR_ENTRY", "DOT", "EQUAL", "COMMA", 
                      "STAR", "OPEN_PAREN", "CLOSE_PAREN", "RANGE", "PLUS", 
                      "COLON", "OPEN_BRACKET", "CLOSE_BRACKET", "URL", "PATH_URL", 
                      "URN_OID", "URN", "CODE", "KW_BOOLEAN", "KW_INTEGER", 
                      "KW_STRING", "KW_DECIMAL", "KW_URI", "KW_BASE64_BINARY", 
                      "KW_INSTANT", "KW_DATE", "KW_DATE_TIME", "KW_TIME", 
                      "KW_CONCEPT_CODE", "KW_OID", "KW_ID", "KW_MARKDOWN", 
                      "KW_UNSIGNED_INT", "KW_POSITIVE_INT", "KW_XHTML", 
                      "WHOLE_NUMBER", "ALL_CAPS", "UPPER_WORD", "LOWER_WORD", 
                      "DOT_SEPARATED_LW", "DOT_SEPARATED_UW", "STRING", 
                      "WS", "NEWLINE", "COMMENT", "LINE_COMMENT" ];

var ruleNames =  [ "doc", "docHeader", "usesStatement", "pathDefs", "pathDef", 
                   "vocabularyDefs", "vocabularyDef", "dataDefs", "dataDef", 
                   "elementDef", "elementHeader", "entryDef", "entryHeader", 
                   "abstractDef", "abstractHeader", "elementProps", "elementProp", 
                   "values", "value", "valueType", "field", "propertyField", 
                   "propertyFieldType", "parentProp", "conceptProp", "concepts", 
                   "descriptionProp", "version", "namespace", "specialWord", 
                   "simpleName", "fullyQualifiedName", "simpleOrFQName", 
                   "code", "fullyQualifiedCode", "codeOrFQCode", "bindingStrength", 
                   "typeConstraint", "elementWithConstraint", "elementBracketPathFirstPart", 
                   "elementBracketPathSecondPart", "elementBracketPathThirdPart", 
                   "elementBracketPath", "elementConstraint", "elementCodeVSConstraint", 
                   "elementCodeValueConstraint", "elementIncludesCodeValueConstraint", 
                   "elementBooleanConstraint", "elementTypeConstraint", 
                   "elementUrlConstraint", "elementIncludesTypeConstraint", 
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
SHRDataElementParser.KW_REQUIRED = 17;
SHRDataElementParser.KW_PREFERRED = 18;
SHRDataElementParser.KW_EXAMPLE = 19;
SHRDataElementParser.KW_EXTENSIBLE = 20;
SHRDataElementParser.KW_FROM = 21;
SHRDataElementParser.KW_IS = 22;
SHRDataElementParser.KW_SUBSTITUTE = 23;
SHRDataElementParser.KW_INCLUDES = 24;
SHRDataElementParser.KW_TRUE = 25;
SHRDataElementParser.KW_FALSE = 26;
SHRDataElementParser.KW_TBD = 27;
SHRDataElementParser.KW_TBD_CODE = 28;
SHRDataElementParser.KW_ONLY = 29;
SHRDataElementParser.KW_BAR_ENTRY = 30;
SHRDataElementParser.DOT = 31;
SHRDataElementParser.EQUAL = 32;
SHRDataElementParser.COMMA = 33;
SHRDataElementParser.STAR = 34;
SHRDataElementParser.OPEN_PAREN = 35;
SHRDataElementParser.CLOSE_PAREN = 36;
SHRDataElementParser.RANGE = 37;
SHRDataElementParser.PLUS = 38;
SHRDataElementParser.COLON = 39;
SHRDataElementParser.OPEN_BRACKET = 40;
SHRDataElementParser.CLOSE_BRACKET = 41;
SHRDataElementParser.URL = 42;
SHRDataElementParser.PATH_URL = 43;
SHRDataElementParser.URN_OID = 44;
SHRDataElementParser.URN = 45;
SHRDataElementParser.CODE = 46;
SHRDataElementParser.KW_BOOLEAN = 47;
SHRDataElementParser.KW_INTEGER = 48;
SHRDataElementParser.KW_STRING = 49;
SHRDataElementParser.KW_DECIMAL = 50;
SHRDataElementParser.KW_URI = 51;
SHRDataElementParser.KW_BASE64_BINARY = 52;
SHRDataElementParser.KW_INSTANT = 53;
SHRDataElementParser.KW_DATE = 54;
SHRDataElementParser.KW_DATE_TIME = 55;
SHRDataElementParser.KW_TIME = 56;
SHRDataElementParser.KW_CONCEPT_CODE = 57;
SHRDataElementParser.KW_OID = 58;
SHRDataElementParser.KW_ID = 59;
SHRDataElementParser.KW_MARKDOWN = 60;
SHRDataElementParser.KW_UNSIGNED_INT = 61;
SHRDataElementParser.KW_POSITIVE_INT = 62;
SHRDataElementParser.KW_XHTML = 63;
SHRDataElementParser.WHOLE_NUMBER = 64;
SHRDataElementParser.ALL_CAPS = 65;
SHRDataElementParser.UPPER_WORD = 66;
SHRDataElementParser.LOWER_WORD = 67;
SHRDataElementParser.DOT_SEPARATED_LW = 68;
SHRDataElementParser.DOT_SEPARATED_UW = 69;
SHRDataElementParser.STRING = 70;
SHRDataElementParser.WS = 71;
SHRDataElementParser.NEWLINE = 72;
SHRDataElementParser.COMMENT = 73;
SHRDataElementParser.LINE_COMMENT = 74;

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
SHRDataElementParser.RULE_bindingStrength = 36;
SHRDataElementParser.RULE_typeConstraint = 37;
SHRDataElementParser.RULE_elementWithConstraint = 38;
SHRDataElementParser.RULE_elementBracketPathFirstPart = 39;
SHRDataElementParser.RULE_elementBracketPathSecondPart = 40;
SHRDataElementParser.RULE_elementBracketPathThirdPart = 41;
SHRDataElementParser.RULE_elementBracketPath = 42;
SHRDataElementParser.RULE_elementConstraint = 43;
SHRDataElementParser.RULE_elementCodeVSConstraint = 44;
SHRDataElementParser.RULE_elementCodeValueConstraint = 45;
SHRDataElementParser.RULE_elementIncludesCodeValueConstraint = 46;
SHRDataElementParser.RULE_elementBooleanConstraint = 47;
SHRDataElementParser.RULE_elementTypeConstraint = 48;
SHRDataElementParser.RULE_elementUrlConstraint = 49;
SHRDataElementParser.RULE_elementIncludesTypeConstraint = 50;
SHRDataElementParser.RULE_valueset = 51;
SHRDataElementParser.RULE_primitive = 52;
SHRDataElementParser.RULE_count = 53;
SHRDataElementParser.RULE_tbd = 54;
SHRDataElementParser.RULE_tbdCode = 55;

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
        this.state = 112;
        this.docHeader();
        this.state = 114;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_DESCRIPTION) {
            this.state = 113;
            this.descriptionProp();
        }

        this.state = 117;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_USES) {
            this.state = 116;
            this.usesStatement();
        }

        this.state = 120;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_PATH) {
            this.state = 119;
            this.pathDefs();
        }

        this.state = 123;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_VOCABULARY) {
            this.state = 122;
            this.vocabularyDefs();
        }

        this.state = 125;
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
        this.state = 127;
        this.match(SHRDataElementParser.KW_GRAMMAR);
        this.state = 128;
        this.match(SHRDataElementParser.KW_G_DATA_ELEMENT);
        this.state = 129;
        this.version();
        this.state = 130;
        this.match(SHRDataElementParser.KW_NAMESPACE);
        this.state = 131;
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
        this.state = 133;
        this.match(SHRDataElementParser.KW_USES);
        this.state = 134;
        this.namespace();
        this.state = 139;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRDataElementParser.COMMA) {
            this.state = 135;
            this.match(SHRDataElementParser.COMMA);
            this.state = 136;
            this.namespace();
            this.state = 141;
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
        this.state = 143; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 142;
            this.pathDef();
            this.state = 145; 
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
        this.state = 147;
        this.match(SHRDataElementParser.KW_PATH);
        this.state = 148;
        this.match(SHRDataElementParser.ALL_CAPS);
        this.state = 149;
        this.match(SHRDataElementParser.EQUAL);
        this.state = 150;
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
        this.state = 153; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 152;
            this.vocabularyDef();
            this.state = 155; 
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
        this.state = 157;
        this.match(SHRDataElementParser.KW_VOCABULARY);
        this.state = 158;
        this.match(SHRDataElementParser.ALL_CAPS);
        this.state = 159;
        this.match(SHRDataElementParser.EQUAL);
        this.state = 160;
        _la = this._input.LA(1);
        if(!(((((_la - 42)) & ~0x1f) == 0 && ((1 << (_la - 42)) & ((1 << (SHRDataElementParser.URL - 42)) | (1 << (SHRDataElementParser.URN_OID - 42)) | (1 << (SHRDataElementParser.URN - 42)))) !== 0))) {
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
        this.state = 165;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRDataElementParser.KW_ABSTRACT) | (1 << SHRDataElementParser.KW_ELEMENT) | (1 << SHRDataElementParser.KW_ENTRY))) !== 0)) {
            this.state = 162;
            this.dataDef();
            this.state = 167;
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

DataDefContext.prototype.abstractDef = function() {
    return this.getTypedRuleContext(AbstractDefContext,0);
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
        this.state = 171;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.KW_ELEMENT:
            this.enterOuterAlt(localctx, 1);
            this.state = 168;
            this.elementDef();
            break;
        case SHRDataElementParser.KW_ENTRY:
            this.enterOuterAlt(localctx, 2);
            this.state = 169;
            this.entryDef();
            break;
        case SHRDataElementParser.KW_ABSTRACT:
            this.enterOuterAlt(localctx, 3);
            this.state = 170;
            this.abstractDef();
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
        this.state = 173;
        this.elementHeader();
        this.state = 175;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRDataElementParser.KW_PARENT) | (1 << SHRDataElementParser.KW_CONCEPT) | (1 << SHRDataElementParser.KW_DESCRIPTION))) !== 0)) {
            this.state = 174;
            this.elementProps();
        }

        this.state = 177;
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
        this.state = 179;
        this.match(SHRDataElementParser.KW_ELEMENT);
        this.state = 180;
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
        this.state = 182;
        this.entryHeader();
        this.state = 184;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRDataElementParser.KW_PARENT) | (1 << SHRDataElementParser.KW_CONCEPT) | (1 << SHRDataElementParser.KW_DESCRIPTION))) !== 0)) {
            this.state = 183;
            this.elementProps();
        }

        this.state = 186;
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
        this.state = 188;
        this.match(SHRDataElementParser.KW_ENTRY);
        this.state = 189;
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
        this.state = 191;
        this.abstractHeader();
        this.state = 193;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRDataElementParser.KW_PARENT) | (1 << SHRDataElementParser.KW_CONCEPT) | (1 << SHRDataElementParser.KW_DESCRIPTION))) !== 0)) {
            this.state = 192;
            this.elementProps();
        }

        this.state = 195;
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
        this.state = 197;
        this.match(SHRDataElementParser.KW_ABSTRACT);
        this.state = 198;
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
        this.state = 201; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 200;
            this.elementProp();
            this.state = 203; 
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
        this.state = 208;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.KW_PARENT:
            this.enterOuterAlt(localctx, 1);
            this.state = 205;
            this.parentProp();
            break;
        case SHRDataElementParser.KW_CONCEPT:
            this.enterOuterAlt(localctx, 2);
            this.state = 206;
            this.conceptProp();
            break;
        case SHRDataElementParser.KW_DESCRIPTION:
            this.enterOuterAlt(localctx, 3);
            this.state = 207;
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
        this.state = 211;
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        if(la_===1) {
            this.state = 210;
            this.value();

        }
        this.state = 216;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRDataElementParser.KW_VALUE) | (1 << SHRDataElementParser.KW_PROPERTY) | (1 << SHRDataElementParser.KW_BAR_ENTRY))) !== 0) || ((((_la - 47)) & ~0x1f) == 0 && ((1 << (_la - 47)) & ((1 << (SHRDataElementParser.KW_BOOLEAN - 47)) | (1 << (SHRDataElementParser.KW_INTEGER - 47)) | (1 << (SHRDataElementParser.KW_STRING - 47)) | (1 << (SHRDataElementParser.KW_DECIMAL - 47)) | (1 << (SHRDataElementParser.KW_URI - 47)) | (1 << (SHRDataElementParser.KW_BASE64_BINARY - 47)) | (1 << (SHRDataElementParser.KW_INSTANT - 47)) | (1 << (SHRDataElementParser.KW_DATE - 47)) | (1 << (SHRDataElementParser.KW_DATE_TIME - 47)) | (1 << (SHRDataElementParser.KW_TIME - 47)) | (1 << (SHRDataElementParser.KW_CONCEPT_CODE - 47)) | (1 << (SHRDataElementParser.KW_OID - 47)) | (1 << (SHRDataElementParser.KW_ID - 47)) | (1 << (SHRDataElementParser.KW_MARKDOWN - 47)) | (1 << (SHRDataElementParser.KW_UNSIGNED_INT - 47)) | (1 << (SHRDataElementParser.KW_POSITIVE_INT - 47)) | (1 << (SHRDataElementParser.KW_XHTML - 47)) | (1 << (SHRDataElementParser.ALL_CAPS - 47)) | (1 << (SHRDataElementParser.UPPER_WORD - 47)) | (1 << (SHRDataElementParser.LOWER_WORD - 47)) | (1 << (SHRDataElementParser.DOT_SEPARATED_UW - 47)))) !== 0)) {
            this.state = 213;
            this.field();
            this.state = 218;
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
        this.state = 219;
        this.match(SHRDataElementParser.KW_VALUE);
        this.state = 220;
        this.match(SHRDataElementParser.COLON);
        this.state = 221;
        this.valueType();
        this.state = 226;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRDataElementParser.KW_OR) {
            this.state = 222;
            this.match(SHRDataElementParser.KW_OR);
            this.state = 223;
            this.valueType();
            this.state = 228;
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
        this.state = 233;
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 229;
            this.simpleOrFQName();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 230;
            this.primitive();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 231;
            this.elementWithConstraint();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 232;
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
        this.state = 237;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.KW_PROPERTY:
            this.enterOuterAlt(localctx, 1);
            this.state = 235;
            this.propertyField();
            break;
        case SHRDataElementParser.KW_VALUE:
        case SHRDataElementParser.KW_BAR_ENTRY:
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
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
        case SHRDataElementParser.DOT_SEPARATED_UW:
            this.enterOuterAlt(localctx, 2);
            this.state = 236;
            this.elementWithConstraint();
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

PropertyFieldContext.prototype.KW_PROPERTY = function() {
    return this.getToken(SHRDataElementParser.KW_PROPERTY, 0);
};

PropertyFieldContext.prototype.propertyFieldType = function() {
    return this.getTypedRuleContext(PropertyFieldTypeContext,0);
};

PropertyFieldContext.prototype.count = function() {
    return this.getTypedRuleContext(CountContext,0);
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
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 239;
        this.match(SHRDataElementParser.KW_PROPERTY);
        this.state = 240;
        this.propertyFieldType();
        this.state = 241;
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
        this.state = 246;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.KW_VALUE:
        case SHRDataElementParser.KW_BAR_ENTRY:
            this.enterOuterAlt(localctx, 1);
            this.state = 243;
            this.specialWord();
            break;
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
        case SHRDataElementParser.DOT_SEPARATED_UW:
            this.enterOuterAlt(localctx, 2);
            this.state = 244;
            this.simpleOrFQName();
            break;
        case SHRDataElementParser.KW_TBD:
            this.enterOuterAlt(localctx, 3);
            this.state = 245;
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
        this.state = 248;
        this.match(SHRDataElementParser.KW_PARENT);
        this.state = 251;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
        case SHRDataElementParser.DOT_SEPARATED_UW:
            this.state = 249;
            this.simpleOrFQName();
            break;
        case SHRDataElementParser.KW_TBD:
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
        this.state = 253;
        this.match(SHRDataElementParser.KW_CONCEPT);
        this.state = 256;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.KW_TBD_CODE:
        case SHRDataElementParser.ALL_CAPS:
            this.state = 254;
            this.concepts();
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
        this.state = 258;
        this.fullyQualifiedCode();
        this.state = 263;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRDataElementParser.COMMA) {
            this.state = 259;
            this.match(SHRDataElementParser.COMMA);
            this.state = 260;
            this.fullyQualifiedCode();
            this.state = 265;
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
        this.state = 266;
        this.match(SHRDataElementParser.KW_DESCRIPTION);
        this.state = 267;
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
        this.state = 269;
        this.match(SHRDataElementParser.WHOLE_NUMBER);
        this.state = 270;
        this.match(SHRDataElementParser.DOT);
        this.state = 271;
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
        this.state = 273;
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
        this.state = 275;
        _la = this._input.LA(1);
        if(!(_la===SHRDataElementParser.KW_VALUE || _la===SHRDataElementParser.KW_BAR_ENTRY)) {
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
        this.state = 277;
        _la = this._input.LA(1);
        if(!(((((_la - 65)) & ~0x1f) == 0 && ((1 << (_la - 65)) & ((1 << (SHRDataElementParser.ALL_CAPS - 65)) | (1 << (SHRDataElementParser.UPPER_WORD - 65)) | (1 << (SHRDataElementParser.LOWER_WORD - 65)))) !== 0))) {
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
        this.state = 279;
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
        this.state = 283;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
            this.enterOuterAlt(localctx, 1);
            this.state = 281;
            this.simpleName();
            break;
        case SHRDataElementParser.DOT_SEPARATED_UW:
            this.enterOuterAlt(localctx, 2);
            this.state = 282;
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
        this.state = 285;
        this.match(SHRDataElementParser.CODE);
        this.state = 287;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.STRING) {
            this.state = 286;
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
        this.state = 292;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.ALL_CAPS:
            this.enterOuterAlt(localctx, 1);
            this.state = 289;
            this.match(SHRDataElementParser.ALL_CAPS);
            this.state = 290;
            this.code();
            break;
        case SHRDataElementParser.KW_TBD_CODE:
            this.enterOuterAlt(localctx, 2);
            this.state = 291;
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
        this.state = 296;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.KW_TBD_CODE:
        case SHRDataElementParser.ALL_CAPS:
            this.enterOuterAlt(localctx, 1);
            this.state = 294;
            this.fullyQualifiedCode();
            break;
        case SHRDataElementParser.CODE:
            this.enterOuterAlt(localctx, 2);
            this.state = 295;
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

function BindingStrengthContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_bindingStrength;
    return this;
}

BindingStrengthContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BindingStrengthContext.prototype.constructor = BindingStrengthContext;

BindingStrengthContext.prototype.KW_REQUIRED = function() {
    return this.getToken(SHRDataElementParser.KW_REQUIRED, 0);
};

BindingStrengthContext.prototype.KW_PREFERRED = function() {
    return this.getToken(SHRDataElementParser.KW_PREFERRED, 0);
};

BindingStrengthContext.prototype.KW_EXAMPLE = function() {
    return this.getToken(SHRDataElementParser.KW_EXAMPLE, 0);
};

BindingStrengthContext.prototype.KW_EXTENSIBLE = function() {
    return this.getToken(SHRDataElementParser.KW_EXTENSIBLE, 0);
};

BindingStrengthContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterBindingStrength(this);
	}
};

BindingStrengthContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitBindingStrength(this);
	}
};

BindingStrengthContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitBindingStrength(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.BindingStrengthContext = BindingStrengthContext;

SHRDataElementParser.prototype.bindingStrength = function() {

    var localctx = new BindingStrengthContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, SHRDataElementParser.RULE_bindingStrength);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 298;
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
        this.state = 303;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
        case SHRDataElementParser.DOT_SEPARATED_UW:
            this.state = 300;
            this.simpleOrFQName();
            break;
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
            this.state = 301;
            this.primitive();
            break;
        case SHRDataElementParser.KW_TBD:
            this.state = 302;
            this.tbd();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 305;
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
        this.state = 311;
        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
        switch(la_) {
        case 1:
            this.state = 307;
            this.specialWord();
            break;

        case 2:
            this.state = 308;
            this.simpleOrFQName();
            break;

        case 3:
            this.state = 309;
            this.elementBracketPath();
            break;

        case 4:
            this.state = 310;
            this.primitive();
            break;

        }
        this.state = 315;
        switch (this._input.LA(1)) {
        case SHRDataElementParser.WHOLE_NUMBER:
        	this.state = 313;
        	this.count();
        	break;
        case SHRDataElementParser.KW_FROM:
        case SHRDataElementParser.KW_SUBSTITUTE:
        case SHRDataElementParser.KW_INCLUDES:
        case SHRDataElementParser.KW_ONLY:
        case SHRDataElementParser.EQUAL:
        case SHRDataElementParser.PLUS:
        	this.state = 314;
        	this.elementConstraint();
        	break;
        case SHRDataElementParser.EOF:
        case SHRDataElementParser.KW_ABSTRACT:
        case SHRDataElementParser.KW_ELEMENT:
        case SHRDataElementParser.KW_ENTRY:
        case SHRDataElementParser.KW_VALUE:
        case SHRDataElementParser.KW_PROPERTY:
        case SHRDataElementParser.KW_OR:
        case SHRDataElementParser.KW_BAR_ENTRY:
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
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
        case SHRDataElementParser.DOT_SEPARATED_UW:
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

function ElementBracketPathFirstPartContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementBracketPathFirstPart;
    return this;
}

ElementBracketPathFirstPartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementBracketPathFirstPartContext.prototype.constructor = ElementBracketPathFirstPartContext;

ElementBracketPathFirstPartContext.prototype.specialWord = function() {
    return this.getTypedRuleContext(SpecialWordContext,0);
};

ElementBracketPathFirstPartContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

ElementBracketPathFirstPartContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementBracketPathFirstPart(this);
	}
};

ElementBracketPathFirstPartContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementBracketPathFirstPart(this);
	}
};

ElementBracketPathFirstPartContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementBracketPathFirstPart(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementBracketPathFirstPartContext = ElementBracketPathFirstPartContext;

SHRDataElementParser.prototype.elementBracketPathFirstPart = function() {

    var localctx = new ElementBracketPathFirstPartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, SHRDataElementParser.RULE_elementBracketPathFirstPart);
    try {
        this.state = 319;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.KW_VALUE:
        case SHRDataElementParser.KW_BAR_ENTRY:
            this.enterOuterAlt(localctx, 1);
            this.state = 317;
            this.specialWord();
            break;
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
        case SHRDataElementParser.DOT_SEPARATED_UW:
            this.enterOuterAlt(localctx, 2);
            this.state = 318;
            this.simpleOrFQName();
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

function ElementBracketPathSecondPartContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementBracketPathSecondPart;
    return this;
}

ElementBracketPathSecondPartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementBracketPathSecondPartContext.prototype.constructor = ElementBracketPathSecondPartContext;

ElementBracketPathSecondPartContext.prototype.OPEN_BRACKET = function() {
    return this.getToken(SHRDataElementParser.OPEN_BRACKET, 0);
};

ElementBracketPathSecondPartContext.prototype.CLOSE_BRACKET = function() {
    return this.getToken(SHRDataElementParser.CLOSE_BRACKET, 0);
};

ElementBracketPathSecondPartContext.prototype.simpleName = function() {
    return this.getTypedRuleContext(SimpleNameContext,0);
};

ElementBracketPathSecondPartContext.prototype.primitive = function() {
    return this.getTypedRuleContext(PrimitiveContext,0);
};

ElementBracketPathSecondPartContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementBracketPathSecondPart(this);
	}
};

ElementBracketPathSecondPartContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementBracketPathSecondPart(this);
	}
};

ElementBracketPathSecondPartContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementBracketPathSecondPart(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementBracketPathSecondPartContext = ElementBracketPathSecondPartContext;

SHRDataElementParser.prototype.elementBracketPathSecondPart = function() {

    var localctx = new ElementBracketPathSecondPartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, SHRDataElementParser.RULE_elementBracketPathSecondPart);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 321;
        this.match(SHRDataElementParser.OPEN_BRACKET);
        this.state = 324;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
            this.state = 322;
            this.simpleName();
            break;
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
            this.state = 323;
            this.primitive();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 326;
        this.match(SHRDataElementParser.CLOSE_BRACKET);
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

function ElementBracketPathThirdPartContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementBracketPathThirdPart;
    return this;
}

ElementBracketPathThirdPartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementBracketPathThirdPartContext.prototype.constructor = ElementBracketPathThirdPartContext;

ElementBracketPathThirdPartContext.prototype.DOT = function() {
    return this.getToken(SHRDataElementParser.DOT, 0);
};

ElementBracketPathThirdPartContext.prototype.simpleName = function() {
    return this.getTypedRuleContext(SimpleNameContext,0);
};

ElementBracketPathThirdPartContext.prototype.elementBracketPathSecondPart = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElementBracketPathSecondPartContext);
    } else {
        return this.getTypedRuleContext(ElementBracketPathSecondPartContext,i);
    }
};

ElementBracketPathThirdPartContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementBracketPathThirdPart(this);
	}
};

ElementBracketPathThirdPartContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementBracketPathThirdPart(this);
	}
};

ElementBracketPathThirdPartContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementBracketPathThirdPart(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementBracketPathThirdPartContext = ElementBracketPathThirdPartContext;

SHRDataElementParser.prototype.elementBracketPathThirdPart = function() {

    var localctx = new ElementBracketPathThirdPartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, SHRDataElementParser.RULE_elementBracketPathThirdPart);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 328;
        this.match(SHRDataElementParser.DOT);
        this.state = 329;
        this.simpleName();
        this.state = 333;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRDataElementParser.OPEN_BRACKET) {
            this.state = 330;
            this.elementBracketPathSecondPart();
            this.state = 335;
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

ElementBracketPathContext.prototype.elementBracketPathFirstPart = function() {
    return this.getTypedRuleContext(ElementBracketPathFirstPartContext,0);
};

ElementBracketPathContext.prototype.elementBracketPathSecondPart = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElementBracketPathSecondPartContext);
    } else {
        return this.getTypedRuleContext(ElementBracketPathSecondPartContext,i);
    }
};

ElementBracketPathContext.prototype.elementBracketPathThirdPart = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElementBracketPathThirdPartContext);
    } else {
        return this.getTypedRuleContext(ElementBracketPathThirdPartContext,i);
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
    this.enterRule(localctx, 84, SHRDataElementParser.RULE_elementBracketPath);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 336;
        this.elementBracketPathFirstPart();
        this.state = 340;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRDataElementParser.OPEN_BRACKET) {
            this.state = 337;
            this.elementBracketPathSecondPart();
            this.state = 342;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 346;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRDataElementParser.DOT) {
            this.state = 343;
            this.elementBracketPathThirdPart();
            this.state = 348;
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
    this.enterRule(localctx, 86, SHRDataElementParser.RULE_elementConstraint);
    try {
        this.state = 356;
        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 349;
            this.elementCodeVSConstraint();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 350;
            this.elementCodeValueConstraint();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 351;
            this.elementIncludesCodeValueConstraint();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 352;
            this.elementBooleanConstraint();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 353;
            this.elementTypeConstraint();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 354;
            this.elementIncludesTypeConstraint();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 355;
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

ElementCodeVSConstraintContext.prototype.OPEN_PAREN = function() {
    return this.getToken(SHRDataElementParser.OPEN_PAREN, 0);
};

ElementCodeVSConstraintContext.prototype.bindingStrength = function() {
    return this.getTypedRuleContext(BindingStrengthContext,0);
};

ElementCodeVSConstraintContext.prototype.CLOSE_PAREN = function() {
    return this.getToken(SHRDataElementParser.CLOSE_PAREN, 0);
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
    this.enterRule(localctx, 88, SHRDataElementParser.RULE_elementCodeVSConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 358;
        this.match(SHRDataElementParser.KW_FROM);
        this.state = 359;
        this.valueset();
        this.state = 364;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.OPEN_PAREN) {
            this.state = 360;
            this.match(SHRDataElementParser.OPEN_PAREN);
            this.state = 361;
            this.bindingStrength();
            this.state = 362;
            this.match(SHRDataElementParser.CLOSE_PAREN);
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

ElementCodeValueConstraintContext.prototype.fullyQualifiedCode = function() {
    return this.getTypedRuleContext(FullyQualifiedCodeContext,0);
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
    this.enterRule(localctx, 90, SHRDataElementParser.RULE_elementCodeValueConstraint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 366;
        this.match(SHRDataElementParser.EQUAL);
        this.state = 367;
        this.fullyQualifiedCode();
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

ElementIncludesCodeValueConstraintContext.prototype.PLUS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRDataElementParser.PLUS);
    } else {
        return this.getToken(SHRDataElementParser.PLUS, i);
    }
};


ElementIncludesCodeValueConstraintContext.prototype.EQUAL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRDataElementParser.EQUAL);
    } else {
        return this.getToken(SHRDataElementParser.EQUAL, i);
    }
};


ElementIncludesCodeValueConstraintContext.prototype.fullyQualifiedCode = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FullyQualifiedCodeContext);
    } else {
        return this.getTypedRuleContext(FullyQualifiedCodeContext,i);
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
    this.enterRule(localctx, 92, SHRDataElementParser.RULE_elementIncludesCodeValueConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 372; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 369;
            this.match(SHRDataElementParser.PLUS);
            this.state = 370;
            this.match(SHRDataElementParser.EQUAL);
            this.state = 371;
            this.fullyQualifiedCode();
            this.state = 374; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SHRDataElementParser.PLUS);
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
    this.enterRule(localctx, 94, SHRDataElementParser.RULE_elementBooleanConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 376;
        this.match(SHRDataElementParser.EQUAL);
        this.state = 377;
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
    this.enterRule(localctx, 96, SHRDataElementParser.RULE_elementTypeConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 379;
        _la = this._input.LA(1);
        if(!(_la===SHRDataElementParser.KW_SUBSTITUTE || _la===SHRDataElementParser.KW_ONLY)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 383;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
        case SHRDataElementParser.DOT_SEPARATED_UW:
            this.state = 380;
            this.simpleOrFQName();
            break;
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
            this.state = 381;
            this.primitive();
            break;
        case SHRDataElementParser.KW_TBD:
            this.state = 382;
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
    this.enterRule(localctx, 98, SHRDataElementParser.RULE_elementUrlConstraint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 385;
        this.match(SHRDataElementParser.EQUAL);
        this.state = 386;
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
    this.enterRule(localctx, 100, SHRDataElementParser.RULE_elementIncludesTypeConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 390; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 388;
            this.match(SHRDataElementParser.KW_INCLUDES);
            this.state = 389;
            this.typeConstraint();
            this.state = 392; 
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
    this.enterRule(localctx, 102, SHRDataElementParser.RULE_valueset);
    try {
        this.state = 399;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.URL:
            this.enterOuterAlt(localctx, 1);
            this.state = 394;
            this.match(SHRDataElementParser.URL);
            break;
        case SHRDataElementParser.PATH_URL:
            this.enterOuterAlt(localctx, 2);
            this.state = 395;
            this.match(SHRDataElementParser.PATH_URL);
            break;
        case SHRDataElementParser.URN_OID:
            this.enterOuterAlt(localctx, 3);
            this.state = 396;
            this.match(SHRDataElementParser.URN_OID);
            break;
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
            this.enterOuterAlt(localctx, 4);
            this.state = 397;
            this.simpleName();
            break;
        case SHRDataElementParser.KW_TBD:
            this.enterOuterAlt(localctx, 5);
            this.state = 398;
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
    this.enterRule(localctx, 104, SHRDataElementParser.RULE_primitive);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 401;
        _la = this._input.LA(1);
        if(!(((((_la - 47)) & ~0x1f) == 0 && ((1 << (_la - 47)) & ((1 << (SHRDataElementParser.KW_BOOLEAN - 47)) | (1 << (SHRDataElementParser.KW_INTEGER - 47)) | (1 << (SHRDataElementParser.KW_STRING - 47)) | (1 << (SHRDataElementParser.KW_DECIMAL - 47)) | (1 << (SHRDataElementParser.KW_URI - 47)) | (1 << (SHRDataElementParser.KW_BASE64_BINARY - 47)) | (1 << (SHRDataElementParser.KW_INSTANT - 47)) | (1 << (SHRDataElementParser.KW_DATE - 47)) | (1 << (SHRDataElementParser.KW_DATE_TIME - 47)) | (1 << (SHRDataElementParser.KW_TIME - 47)) | (1 << (SHRDataElementParser.KW_CONCEPT_CODE - 47)) | (1 << (SHRDataElementParser.KW_OID - 47)) | (1 << (SHRDataElementParser.KW_ID - 47)) | (1 << (SHRDataElementParser.KW_MARKDOWN - 47)) | (1 << (SHRDataElementParser.KW_UNSIGNED_INT - 47)) | (1 << (SHRDataElementParser.KW_POSITIVE_INT - 47)) | (1 << (SHRDataElementParser.KW_XHTML - 47)))) !== 0))) {
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
    this.enterRule(localctx, 106, SHRDataElementParser.RULE_count);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 403;
        this.match(SHRDataElementParser.WHOLE_NUMBER);
        this.state = 404;
        this.match(SHRDataElementParser.RANGE);
        this.state = 405;
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
    this.enterRule(localctx, 108, SHRDataElementParser.RULE_tbd);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 407;
        this.match(SHRDataElementParser.KW_TBD);
        this.state = 409;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.STRING) {
            this.state = 408;
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
    this.enterRule(localctx, 110, SHRDataElementParser.RULE_tbdCode);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 411;
        this.match(SHRDataElementParser.KW_TBD_CODE);
        this.state = 413;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.STRING) {
            this.state = 412;
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

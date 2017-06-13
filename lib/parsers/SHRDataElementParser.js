// Generated from SHRDataElementParser.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SHRDataElementParserListener = require('./SHRDataElementParserListener').SHRDataElementParserListener;
var SHRDataElementParserVisitor = require('./SHRDataElementParserVisitor').SHRDataElementParserVisitor;

var grammarFileName = "SHRDataElementParser.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3G\u018d\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4",
    "\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t",
    "\20\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27",
    "\t\27\4\30\t\30\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4",
    "\36\t\36\4\37\t\37\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t",
    "\'\4(\t(\4)\t)\4*\t*\4+\t+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t",
    "\61\4\62\t\62\3\2\3\2\5\2g\n\2\3\2\5\2j\n\2\3\2\5\2m\n\2\3\2\5\2p\n",
    "\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\7\4~\n\4\f\4\16\4",
    "\u0081\13\4\3\5\6\5\u0084\n\5\r\5\16\5\u0085\3\6\3\6\3\6\3\6\3\6\3\7",
    "\6\7\u008e\n\7\r\7\16\7\u008f\3\b\3\b\3\b\3\b\3\b\3\t\7\t\u0098\n\t",
    "\f\t\16\t\u009b\13\t\3\n\3\n\5\n\u009f\n\n\3\13\3\13\5\13\u00a3\n\13",
    "\3\13\3\13\3\f\3\f\3\f\3\r\3\r\5\r\u00ac\n\r\3\r\3\r\3\16\3\16\3\16",
    "\3\17\6\17\u00b4\n\17\r\17\16\17\u00b5\3\20\3\20\3\20\5\20\u00bb\n\20",
    "\3\21\5\21\u00be\n\21\3\21\7\21\u00c1\n\21\f\21\16\21\u00c4\13\21\3",
    "\22\3\22\5\22\u00c8\n\22\3\22\5\22\u00cb\n\22\3\22\3\22\3\22\7\22\u00d0",
    "\n\22\f\22\16\22\u00d3\13\22\3\22\5\22\u00d6\n\22\3\23\3\23\3\23\3\23",
    "\3\23\3\23\5\23\u00de\n\23\3\24\5\24\u00e1\n\24\3\24\5\24\u00e4\n\24",
    "\3\24\3\24\3\24\7\24\u00e9\n\24\f\24\16\24\u00ec\13\24\3\24\5\24\u00ef",
    "\n\24\3\25\3\25\3\25\3\25\5\25\u00f5\n\25\3\26\3\26\3\26\5\26\u00fa",
    "\n\26\3\27\3\27\3\27\5\27\u00ff\n\27\3\30\3\30\3\30\7\30\u0104\n\30",
    "\f\30\16\30\u0107\13\30\3\31\3\31\3\31\3\32\3\32\3\32\3\32\3\33\3\33",
    "\3\34\3\34\3\35\3\35\3\36\3\36\5\36\u0118\n\36\3\37\3\37\3\37\3\37\3",
    "\37\3 \3 \5 \u0121\n \3!\3!\3!\5!\u0126\n!\3\"\3\"\5\"\u012a\n\"\3#",
    "\3#\5#\u012e\n#\3#\5#\u0131\n#\3#\3#\3#\5#\u0136\n#\3$\3$\3%\3%\3%\5",
    "%\u013d\n%\3%\5%\u0140\n%\3&\3&\3&\6&\u0145\n&\r&\16&\u0146\3&\3&\5",
    "&\u014b\n&\3&\3&\7&\u014f\n&\f&\16&\u0152\13&\3&\3&\5&\u0156\n&\3\'",
    "\3\'\3\'\3\'\3\'\3\'\5\'\u015e\n\'\3(\3(\3(\3)\3)\3)\3*\3*\6*\u0168",
    "\n*\r*\16*\u0169\3+\3+\3+\3,\3,\3,\5,\u0172\n,\3-\3-\3-\3-\3.\3.\3.",
    "\3.\3.\5.\u017d\n.\3/\3/\3\60\3\60\3\60\3\60\3\61\3\61\5\61\u0187\n",
    "\61\3\62\3\62\5\62\u018b\n\62\3\62\2\2\63\2\4\6\b\n\f\16\20\22\24\26",
    "\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`b\2\n\4\2\'\'",
    ")*\3\2@A\3\2>?\3\2\22\24\3\2\34\35\3\2\31\32\3\2,<\4\2##==\u0199\2d",
    "\3\2\2\2\4s\3\2\2\2\6y\3\2\2\2\b\u0083\3\2\2\2\n\u0087\3\2\2\2\f\u008d",
    "\3\2\2\2\16\u0091\3\2\2\2\20\u0099\3\2\2\2\22\u009e\3\2\2\2\24\u00a0",
    "\3\2\2\2\26\u00a6\3\2\2\2\30\u00a9\3\2\2\2\32\u00af\3\2\2\2\34\u00b3",
    "\3\2\2\2\36\u00ba\3\2\2\2 \u00bd\3\2\2\2\"\u00c5\3\2\2\2$\u00dd\3\2",
    "\2\2&\u00e0\3\2\2\2(\u00f4\3\2\2\2*\u00f6\3\2\2\2,\u00fb\3\2\2\2.\u0100",
    "\3\2\2\2\60\u0108\3\2\2\2\62\u010b\3\2\2\2\64\u010f\3\2\2\2\66\u0111",
    "\3\2\2\28\u0113\3\2\2\2:\u0117\3\2\2\2<\u0119\3\2\2\2>\u011e\3\2\2\2",
    "@\u0125\3\2\2\2B\u0129\3\2\2\2D\u012d\3\2\2\2F\u0137\3\2\2\2H\u013c",
    "\3\2\2\2J\u0141\3\2\2\2L\u015d\3\2\2\2N\u015f\3\2\2\2P\u0162\3\2\2\2",
    "R\u0167\3\2\2\2T\u016b\3\2\2\2V\u016e\3\2\2\2X\u0173\3\2\2\2Z\u017c",
    "\3\2\2\2\\\u017e\3\2\2\2^\u0180\3\2\2\2`\u0184\3\2\2\2b\u0188\3\2\2",
    "\2df\5\4\3\2eg\5\60\31\2fe\3\2\2\2fg\3\2\2\2gi\3\2\2\2hj\5\6\4\2ih\3",
    "\2\2\2ij\3\2\2\2jl\3\2\2\2km\5\b\5\2lk\3\2\2\2lm\3\2\2\2mo\3\2\2\2n",
    "p\5\f\7\2on\3\2\2\2op\3\2\2\2pq\3\2\2\2qr\5\20\t\2r\3\3\2\2\2st\7\3",
    "\2\2tu\7\4\2\2uv\5\62\32\2vw\7\5\2\2wx\5\64\33\2x\5\3\2\2\2yz\7\6\2",
    "\2z\177\5\64\33\2{|\7\"\2\2|~\5\64\33\2}{\3\2\2\2~\u0081\3\2\2\2\177",
    "}\3\2\2\2\177\u0080\3\2\2\2\u0080\7\3\2\2\2\u0081\177\3\2\2\2\u0082",
    "\u0084\5\n\6\2\u0083\u0082\3\2\2\2\u0084\u0085\3\2\2\2\u0085\u0083\3",
    "\2\2\2\u0085\u0086\3\2\2\2\u0086\t\3\2\2\2\u0087\u0088\7\7\2\2\u0088",
    "\u0089\7>\2\2\u0089\u008a\7!\2\2\u008a\u008b\7\'\2\2\u008b\13\3\2\2",
    "\2\u008c\u008e\5\16\b\2\u008d\u008c\3\2\2\2\u008e\u008f\3\2\2\2\u008f",
    "\u008d\3\2\2\2\u008f\u0090\3\2\2\2\u0090\r\3\2\2\2\u0091\u0092\7\b\2",
    "\2\u0092\u0093\7>\2\2\u0093\u0094\7!\2\2\u0094\u0095\t\2\2\2\u0095\17",
    "\3\2\2\2\u0096\u0098\5\22\n\2\u0097\u0096\3\2\2\2\u0098\u009b\3\2\2",
    "\2\u0099\u0097\3\2\2\2\u0099\u009a\3\2\2\2\u009a\21\3\2\2\2\u009b\u0099",
    "\3\2\2\2\u009c\u009f\5\24\13\2\u009d\u009f\5\30\r\2\u009e\u009c\3\2",
    "\2\2\u009e\u009d\3\2\2\2\u009f\23\3\2\2\2\u00a0\u00a2\5\26\f\2\u00a1",
    "\u00a3\5\34\17\2\u00a2\u00a1\3\2\2\2\u00a2\u00a3\3\2\2\2\u00a3\u00a4",
    "\3\2\2\2\u00a4\u00a5\5 \21\2\u00a5\25\3\2\2\2\u00a6\u00a7\7\t\2\2\u00a7",
    "\u00a8\5\66\34\2\u00a8\27\3\2\2\2\u00a9\u00ab\5\32\16\2\u00aa\u00ac",
    "\5\34\17\2\u00ab\u00aa\3\2\2\2\u00ab\u00ac\3\2\2\2\u00ac\u00ad\3\2\2",
    "\2\u00ad\u00ae\5 \21\2\u00ae\31\3\2\2\2\u00af\u00b0\7\n\2\2\u00b0\u00b1",
    "\5\66\34\2\u00b1\33\3\2\2\2\u00b2\u00b4\5\36\20\2\u00b3\u00b2\3\2\2",
    "\2\u00b4\u00b5\3\2\2\2\u00b5\u00b3\3\2\2\2\u00b5\u00b6\3\2\2\2\u00b6",
    "\35\3\2\2\2\u00b7\u00bb\5*\26\2\u00b8\u00bb\5,\27\2\u00b9\u00bb\5\60",
    "\31\2\u00ba\u00b7\3\2\2\2\u00ba\u00b8\3\2\2\2\u00ba\u00b9\3\2\2\2\u00bb",
    "\37\3\2\2\2\u00bc\u00be\5\"\22\2\u00bd\u00bc\3\2\2\2\u00bd\u00be\3\2",
    "\2\2\u00be\u00c2\3\2\2\2\u00bf\u00c1\5&\24\2\u00c0\u00bf\3\2\2\2\u00c1",
    "\u00c4\3\2\2\2\u00c2\u00c0\3\2\2\2\u00c2\u00c3\3\2\2\2\u00c3!\3\2\2",
    "\2\u00c4\u00c2\3\2\2\2\u00c5\u00c7\7\f\2\2\u00c6\u00c8\5^\60\2\u00c7",
    "\u00c6\3\2\2\2\u00c7\u00c8\3\2\2\2\u00c8\u00ca\3\2\2\2\u00c9\u00cb\7",
    "$\2\2\u00ca\u00c9\3\2\2\2\u00ca\u00cb\3\2\2\2\u00cb\u00cc\3\2\2\2\u00cc",
    "\u00d1\5$\23\2\u00cd\u00ce\7\20\2\2\u00ce\u00d0\5$\23\2\u00cf\u00cd",
    "\3\2\2\2\u00d0\u00d3\3\2\2\2\u00d1\u00cf\3\2\2\2\u00d1\u00d2\3\2\2\2",
    "\u00d2\u00d5\3\2\2\2\u00d3\u00d1\3\2\2\2\u00d4\u00d6\7%\2\2\u00d5\u00d4",
    "\3\2\2\2\u00d5\u00d6\3\2\2\2\u00d6#\3\2\2\2\u00d7\u00de\5:\36\2\u00d8",
    "\u00de\5<\37\2\u00d9\u00de\5\\/\2\u00da\u00de\5D#\2\u00db\u00de\5H%",
    "\2\u00dc\u00de\5`\61\2\u00dd\u00d7\3\2\2\2\u00dd\u00d8\3\2\2\2\u00dd",
    "\u00d9\3\2\2\2\u00dd\u00da\3\2\2\2\u00dd\u00db\3\2\2\2\u00dd\u00dc\3",
    "\2\2\2\u00de%\3\2\2\2\u00df\u00e1\5^\60\2\u00e0\u00df\3\2\2\2\u00e0",
    "\u00e1\3\2\2\2\u00e1\u00e3\3\2\2\2\u00e2\u00e4\7$\2\2\u00e3\u00e2\3",
    "\2\2\2\u00e3\u00e4\3\2\2\2\u00e4\u00e5\3\2\2\2\u00e5\u00ea\5(\25\2\u00e6",
    "\u00e7\7\20\2\2\u00e7\u00e9\5(\25\2\u00e8\u00e6\3\2\2\2\u00e9\u00ec",
    "\3\2\2\2\u00ea\u00e8\3\2\2\2\u00ea\u00eb\3\2\2\2\u00eb\u00ee\3\2\2\2",
    "\u00ec\u00ea\3\2\2\2\u00ed\u00ef\7%\2\2\u00ee\u00ed\3\2\2\2\u00ee\u00ef",
    "\3\2\2\2\u00ef\'\3\2\2\2\u00f0\u00f5\5:\36\2\u00f1\u00f5\5<\37\2\u00f2",
    "\u00f5\5H%\2\u00f3\u00f5\5`\61\2\u00f4\u00f0\3\2\2\2\u00f4\u00f1\3\2",
    "\2\2\u00f4\u00f2\3\2\2\2\u00f4\u00f3\3\2\2\2\u00f5)\3\2\2\2\u00f6\u00f9",
    "\7\13\2\2\u00f7\u00fa\5:\36\2\u00f8\u00fa\5`\61\2\u00f9\u00f7\3\2\2",
    "\2\u00f9\u00f8\3\2\2\2\u00fa+\3\2\2\2\u00fb\u00fe\7\r\2\2\u00fc\u00ff",
    "\5.\30\2\u00fd\u00ff\5`\61\2\u00fe\u00fc\3\2\2\2\u00fe\u00fd\3\2\2\2",
    "\u00ff-\3\2\2\2\u0100\u0105\5@!\2\u0101\u0102\7\"\2\2\u0102\u0104\5",
    "@!\2\u0103\u0101\3\2\2\2\u0104\u0107\3\2\2\2\u0105\u0103\3\2\2\2\u0105",
    "\u0106\3\2\2\2\u0106/\3\2\2\2\u0107\u0105\3\2\2\2\u0108\u0109\7\16\2",
    "\2\u0109\u010a\7C\2\2\u010a\61\3\2\2\2\u010b\u010c\7=\2\2\u010c\u010d",
    "\7 \2\2\u010d\u010e\7=\2\2\u010e\63\3\2\2\2\u010f\u0110\t\3\2\2\u0110",
    "\65\3\2\2\2\u0111\u0112\t\4\2\2\u0112\67\3\2\2\2\u0113\u0114\7B\2\2",
    "\u01149\3\2\2\2\u0115\u0118\5\66\34\2\u0116\u0118\58\35\2\u0117\u0115",
    "\3\2\2\2\u0117\u0116\3\2\2\2\u0118;\3\2\2\2\u0119\u011a\7\17\2\2\u011a",
    "\u011b\7$\2\2\u011b\u011c\5:\36\2\u011c\u011d\7%\2\2\u011d=\3\2\2\2",
    "\u011e\u0120\7+\2\2\u011f\u0121\7C\2\2\u0120\u011f\3\2\2\2\u0120\u0121",
    "\3\2\2\2\u0121?\3\2\2\2\u0122\u0123\7>\2\2\u0123\u0126\5> \2\u0124\u0126",
    "\5b\62\2\u0125\u0122\3\2\2\2\u0125\u0124\3\2\2\2\u0126A\3\2\2\2\u0127",
    "\u012a\5@!\2\u0128\u012a\5> \2\u0129\u0127\3\2\2\2\u0129\u0128\3\2\2",
    "\2\u012aC\3\2\2\2\u012b\u012e\7\66\2\2\u012c\u012e\5:\36\2\u012d\u012b",
    "\3\2\2\2\u012d\u012c\3\2\2\2\u012e\u0130\3\2\2\2\u012f\u0131\5F$\2\u0130",
    "\u012f\3\2\2\2\u0130\u0131\3\2\2\2\u0131\u0132\3\2\2\2\u0132\u0133\7",
    "\26\2\2\u0133\u0135\5Z.\2\u0134\u0136\7\25\2\2\u0135\u0134\3\2\2\2\u0135",
    "\u0136\3\2\2\2\u0136E\3\2\2\2\u0137\u0138\t\5\2\2\u0138G\3\2\2\2\u0139",
    "\u013d\5:\36\2\u013a\u013d\5J&\2\u013b\u013d\5\\/\2\u013c\u0139\3\2",
    "\2\2\u013c\u013a\3\2\2\2\u013c\u013b\3\2\2\2\u013d\u013f\3\2\2\2\u013e",
    "\u0140\5L\'\2\u013f\u013e\3\2\2\2\u013f\u0140\3\2\2\2\u0140I\3\2\2\2",
    "\u0141\u0155\5:\36\2\u0142\u0143\7 \2\2\u0143\u0145\5\66\34\2\u0144",
    "\u0142\3\2\2\2\u0145\u0146\3\2\2\2\u0146\u0144\3\2\2\2\u0146\u0147\3",
    "\2\2\2\u0147\u014a\3\2\2\2\u0148\u0149\7 \2\2\u0149\u014b\5\\/\2\u014a",
    "\u0148\3\2\2\2\u014a\u014b\3\2\2\2\u014b\u0156\3\2\2\2\u014c\u014d\7",
    " \2\2\u014d\u014f\5\66\34\2\u014e\u014c\3\2\2\2\u014f\u0152\3\2\2\2",
    "\u0150\u014e\3\2\2\2\u0150\u0151\3\2\2\2\u0151\u0153\3\2\2\2\u0152\u0150",
    "\3\2\2\2\u0153\u0154\7 \2\2\u0154\u0156\5\\/\2\u0155\u0144\3\2\2\2\u0155",
    "\u0150\3\2\2\2\u0156K\3\2\2\2\u0157\u015e\5N(\2\u0158\u015e\5P)\2\u0159",
    "\u015e\5R*\2\u015a\u015e\5T+\2\u015b\u015e\5V,\2\u015c\u015e\5X-\2\u015d",
    "\u0157\3\2\2\2\u015d\u0158\3\2\2\2\u015d\u0159\3\2\2\2\u015d\u015a\3",
    "\2\2\2\u015d\u015b\3\2\2\2\u015d\u015c\3\2\2\2\u015eM\3\2\2\2\u015f",
    "\u0160\7\21\2\2\u0160\u0161\5D#\2\u0161O\3\2\2\2\u0162\u0163\7\30\2",
    "\2\u0163\u0164\5B\"\2\u0164Q\3\2\2\2\u0165\u0166\7\33\2\2\u0166\u0168",
    "\5B\"\2\u0167\u0165\3\2\2\2\u0168\u0169\3\2\2\2\u0169\u0167\3\2\2\2",
    "\u0169\u016a\3\2\2\2\u016aS\3\2\2\2\u016b\u016c\7\30\2\2\u016c\u016d",
    "\t\6\2\2\u016dU\3\2\2\2\u016e\u0171\t\7\2\2\u016f\u0172\5:\36\2\u0170",
    "\u0172\5`\61\2\u0171\u016f\3\2\2\2\u0171\u0170\3\2\2\2\u0172W\3\2\2",
    "\2\u0173\u0174\7\21\2\2\u0174\u0175\7\27\2\2\u0175\u0176\5@!\2\u0176",
    "Y\3\2\2\2\u0177\u017d\7\'\2\2\u0178\u017d\7(\2\2\u0179\u017d\7)\2\2",
    "\u017a\u017d\5\66\34\2\u017b\u017d\5`\61\2\u017c\u0177\3\2\2\2\u017c",
    "\u0178\3\2\2\2\u017c\u0179\3\2\2\2\u017c\u017a\3\2\2\2\u017c\u017b\3",
    "\2\2\2\u017d[\3\2\2\2\u017e\u017f\t\b\2\2\u017f]\3\2\2\2\u0180\u0181",
    "\7=\2\2\u0181\u0182\7&\2\2\u0182\u0183\t\t\2\2\u0183_\3\2\2\2\u0184",
    "\u0186\7\36\2\2\u0185\u0187\7C\2\2\u0186\u0185\3\2\2\2\u0186\u0187\3",
    "\2\2\2\u0187a\3\2\2\2\u0188\u018a\7\37\2\2\u0189\u018b\7C\2\2\u018a",
    "\u0189\3\2\2\2\u018a\u018b\3\2\2\2\u018bc\3\2\2\2\61filo\177\u0085\u008f",
    "\u0099\u009e\u00a2\u00ab\u00b5\u00ba\u00bd\u00c2\u00c7\u00ca\u00d1\u00d5",
    "\u00dd\u00e0\u00e3\u00ea\u00ee\u00f4\u00f9\u00fe\u0105\u0117\u0120\u0125",
    "\u0129\u012d\u0130\u0135\u013c\u013f\u0146\u014a\u0150\u0155\u015d\u0169",
    "\u0171\u017c\u0186\u018a"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'Grammar:'", "'DataElement'", "'Namespace:'", 
                     "'Uses:'", "'Path:'", "'CodeSystem:'", "'Element:'", 
                     "'EntryElement:'", "'Based on:'", "'Value:'", "'Concept:'", 
                     "'Description:'", "'ref'", "'or'", "'with'", "'must be'", 
                     "'should be'", "'could be'", "'if covered'", "'from'", 
                     "'units'", "'is'", "'is type'", "'value is type'", 
                     "'includes'", "'true'", "'false'", "'TBD'", "'TBD#TBD'", 
                     "'.'", "'='", "','", "'*'", "'('", "')'", "'..'", 'null', 
                     'null', 'null', 'null', 'null', "'boolean'", "'integer'", 
                     "'string'", "'decimal'", "'uri'", "'base64Binary'", 
                     "'instant'", "'date'", "'dateTime'", "'time'", "'code'", 
                     "'oid'", "'id'", "'markdown'", "'unsignedInt'", "'positiveInt'", 
                     "'xhtml'", 'null', 'null', 'null', 'null', 'null', 
                     'null', 'null', 'null', "'\n'" ];

var symbolicNames = [ 'null', "KW_GRAMMAR", "KW_G_DATA_ELEMENT", "KW_NAMESPACE", 
                      "KW_USES", "KW_PATH", "KW_VOCABULARY", "KW_ELEMENT", 
                      "KW_ENTRY_ELEMENT", "KW_BASED_ON", "KW_VALUE", "KW_CONCEPT", 
                      "KW_DESCRIPTION", "KW_REF", "KW_OR", "KW_WITH", "KW_MUST_BE", 
                      "KW_SHOULD_BE", "KW_COULD_BE", "KW_IF_COVERED", "KW_FROM", 
                      "KW_UNITS", "KW_IS", "KW_IS_TYPE", "KW_VALUE_IS_TYPE", 
                      "KW_INCLUDES", "KW_TRUE", "KW_FALSE", "KW_TBD", "KW_TBD_CODE", 
                      "DOT", "EQUAL", "COMMA", "STAR", "OPEN_PAREN", "CLOSE_PAREN", 
                      "RANGE", "URL", "PATH_URL", "URN_OID", "URN", "CODE", 
                      "KW_BOOLEAN", "KW_INTEGER", "KW_STRING", "KW_DECIMAL", 
                      "KW_URI", "KW_BASE64_BINARY", "KW_INSTANT", "KW_DATE", 
                      "KW_DATE_TIME", "KW_TIME", "KW_CODE", "KW_OID", "KW_ID", 
                      "KW_MARKDOWN", "KW_UNSIGNED_INT", "KW_POSITIVE_INT", 
                      "KW_XHTML", "WHOLE_NUMBER", "ALL_CAPS", "UPPER_WORD", 
                      "LOWER_WORD", "DOT_SEPARATED_LW", "DOT_SEPARATED_UW", 
                      "STRING", "WS", "NEWLINE", "COMMENT", "LINE_COMMENT" ];

var ruleNames =  [ "doc", "docHeader", "usesStatement", "pathDefs", "pathDef", 
                   "vocabularyDefs", "vocabularyDef", "dataDefs", "dataDef", 
                   "elementDef", "elementHeader", "entryDef", "entryHeader", 
                   "elementProps", "elementProp", "values", "value", "valueType", 
                   "field", "fieldType", "basedOnProp", "conceptProp", "concepts", 
                   "descriptionProp", "version", "namespace", "simpleName", 
                   "fullyQualifiedName", "simpleOrFQName", "ref", "code", 
                   "fullyQualifiedCode", "codeOrFQCode", "codeFromVS", "bindingInfix", 
                   "elementWithConstraint", "elementPath", "elementConstraint", 
                   "elementCodeVSConstraint", "elementCodeValueConstraint", 
                   "elementIncludesCodeValueConstraint", "elementBooleanConstraint", 
                   "elementTypeConstraint", "elementWithUnitsConstraint", 
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
SHRDataElementParser.KW_ELEMENT = 7;
SHRDataElementParser.KW_ENTRY_ELEMENT = 8;
SHRDataElementParser.KW_BASED_ON = 9;
SHRDataElementParser.KW_VALUE = 10;
SHRDataElementParser.KW_CONCEPT = 11;
SHRDataElementParser.KW_DESCRIPTION = 12;
SHRDataElementParser.KW_REF = 13;
SHRDataElementParser.KW_OR = 14;
SHRDataElementParser.KW_WITH = 15;
SHRDataElementParser.KW_MUST_BE = 16;
SHRDataElementParser.KW_SHOULD_BE = 17;
SHRDataElementParser.KW_COULD_BE = 18;
SHRDataElementParser.KW_IF_COVERED = 19;
SHRDataElementParser.KW_FROM = 20;
SHRDataElementParser.KW_UNITS = 21;
SHRDataElementParser.KW_IS = 22;
SHRDataElementParser.KW_IS_TYPE = 23;
SHRDataElementParser.KW_VALUE_IS_TYPE = 24;
SHRDataElementParser.KW_INCLUDES = 25;
SHRDataElementParser.KW_TRUE = 26;
SHRDataElementParser.KW_FALSE = 27;
SHRDataElementParser.KW_TBD = 28;
SHRDataElementParser.KW_TBD_CODE = 29;
SHRDataElementParser.DOT = 30;
SHRDataElementParser.EQUAL = 31;
SHRDataElementParser.COMMA = 32;
SHRDataElementParser.STAR = 33;
SHRDataElementParser.OPEN_PAREN = 34;
SHRDataElementParser.CLOSE_PAREN = 35;
SHRDataElementParser.RANGE = 36;
SHRDataElementParser.URL = 37;
SHRDataElementParser.PATH_URL = 38;
SHRDataElementParser.URN_OID = 39;
SHRDataElementParser.URN = 40;
SHRDataElementParser.CODE = 41;
SHRDataElementParser.KW_BOOLEAN = 42;
SHRDataElementParser.KW_INTEGER = 43;
SHRDataElementParser.KW_STRING = 44;
SHRDataElementParser.KW_DECIMAL = 45;
SHRDataElementParser.KW_URI = 46;
SHRDataElementParser.KW_BASE64_BINARY = 47;
SHRDataElementParser.KW_INSTANT = 48;
SHRDataElementParser.KW_DATE = 49;
SHRDataElementParser.KW_DATE_TIME = 50;
SHRDataElementParser.KW_TIME = 51;
SHRDataElementParser.KW_CODE = 52;
SHRDataElementParser.KW_OID = 53;
SHRDataElementParser.KW_ID = 54;
SHRDataElementParser.KW_MARKDOWN = 55;
SHRDataElementParser.KW_UNSIGNED_INT = 56;
SHRDataElementParser.KW_POSITIVE_INT = 57;
SHRDataElementParser.KW_XHTML = 58;
SHRDataElementParser.WHOLE_NUMBER = 59;
SHRDataElementParser.ALL_CAPS = 60;
SHRDataElementParser.UPPER_WORD = 61;
SHRDataElementParser.LOWER_WORD = 62;
SHRDataElementParser.DOT_SEPARATED_LW = 63;
SHRDataElementParser.DOT_SEPARATED_UW = 64;
SHRDataElementParser.STRING = 65;
SHRDataElementParser.WS = 66;
SHRDataElementParser.NEWLINE = 67;
SHRDataElementParser.COMMENT = 68;
SHRDataElementParser.LINE_COMMENT = 69;

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
SHRDataElementParser.RULE_elementProps = 13;
SHRDataElementParser.RULE_elementProp = 14;
SHRDataElementParser.RULE_values = 15;
SHRDataElementParser.RULE_value = 16;
SHRDataElementParser.RULE_valueType = 17;
SHRDataElementParser.RULE_field = 18;
SHRDataElementParser.RULE_fieldType = 19;
SHRDataElementParser.RULE_basedOnProp = 20;
SHRDataElementParser.RULE_conceptProp = 21;
SHRDataElementParser.RULE_concepts = 22;
SHRDataElementParser.RULE_descriptionProp = 23;
SHRDataElementParser.RULE_version = 24;
SHRDataElementParser.RULE_namespace = 25;
SHRDataElementParser.RULE_simpleName = 26;
SHRDataElementParser.RULE_fullyQualifiedName = 27;
SHRDataElementParser.RULE_simpleOrFQName = 28;
SHRDataElementParser.RULE_ref = 29;
SHRDataElementParser.RULE_code = 30;
SHRDataElementParser.RULE_fullyQualifiedCode = 31;
SHRDataElementParser.RULE_codeOrFQCode = 32;
SHRDataElementParser.RULE_codeFromVS = 33;
SHRDataElementParser.RULE_bindingInfix = 34;
SHRDataElementParser.RULE_elementWithConstraint = 35;
SHRDataElementParser.RULE_elementPath = 36;
SHRDataElementParser.RULE_elementConstraint = 37;
SHRDataElementParser.RULE_elementCodeVSConstraint = 38;
SHRDataElementParser.RULE_elementCodeValueConstraint = 39;
SHRDataElementParser.RULE_elementIncludesCodeValueConstraint = 40;
SHRDataElementParser.RULE_elementBooleanConstraint = 41;
SHRDataElementParser.RULE_elementTypeConstraint = 42;
SHRDataElementParser.RULE_elementWithUnitsConstraint = 43;
SHRDataElementParser.RULE_valueset = 44;
SHRDataElementParser.RULE_primitive = 45;
SHRDataElementParser.RULE_count = 46;
SHRDataElementParser.RULE_tbd = 47;
SHRDataElementParser.RULE_tbdCode = 48;

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
        this.state = 98;
        this.docHeader();
        this.state = 100;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_DESCRIPTION) {
            this.state = 99;
            this.descriptionProp();
        }

        this.state = 103;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_USES) {
            this.state = 102;
            this.usesStatement();
        }

        this.state = 106;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_PATH) {
            this.state = 105;
            this.pathDefs();
        }

        this.state = 109;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_VOCABULARY) {
            this.state = 108;
            this.vocabularyDefs();
        }

        this.state = 111;
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
        this.state = 113;
        this.match(SHRDataElementParser.KW_GRAMMAR);
        this.state = 114;
        this.match(SHRDataElementParser.KW_G_DATA_ELEMENT);
        this.state = 115;
        this.version();
        this.state = 116;
        this.match(SHRDataElementParser.KW_NAMESPACE);
        this.state = 117;
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
        this.state = 119;
        this.match(SHRDataElementParser.KW_USES);
        this.state = 120;
        this.namespace();
        this.state = 125;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRDataElementParser.COMMA) {
            this.state = 121;
            this.match(SHRDataElementParser.COMMA);
            this.state = 122;
            this.namespace();
            this.state = 127;
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
        this.state = 129; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 128;
            this.pathDef();
            this.state = 131; 
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
        this.state = 133;
        this.match(SHRDataElementParser.KW_PATH);
        this.state = 134;
        this.match(SHRDataElementParser.ALL_CAPS);
        this.state = 135;
        this.match(SHRDataElementParser.EQUAL);
        this.state = 136;
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
        this.state = 139; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 138;
            this.vocabularyDef();
            this.state = 141; 
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
        this.state = 143;
        this.match(SHRDataElementParser.KW_VOCABULARY);
        this.state = 144;
        this.match(SHRDataElementParser.ALL_CAPS);
        this.state = 145;
        this.match(SHRDataElementParser.EQUAL);
        this.state = 146;
        _la = this._input.LA(1);
        if(!(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (SHRDataElementParser.URL - 37)) | (1 << (SHRDataElementParser.URN_OID - 37)) | (1 << (SHRDataElementParser.URN - 37)))) !== 0))) {
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
        this.state = 151;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRDataElementParser.KW_ELEMENT || _la===SHRDataElementParser.KW_ENTRY_ELEMENT) {
            this.state = 148;
            this.dataDef();
            this.state = 153;
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
        this.state = 156;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.KW_ELEMENT:
            this.enterOuterAlt(localctx, 1);
            this.state = 154;
            this.elementDef();
            break;
        case SHRDataElementParser.KW_ENTRY_ELEMENT:
            this.enterOuterAlt(localctx, 2);
            this.state = 155;
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
        this.state = 158;
        this.elementHeader();
        this.state = 160;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRDataElementParser.KW_BASED_ON) | (1 << SHRDataElementParser.KW_CONCEPT) | (1 << SHRDataElementParser.KW_DESCRIPTION))) !== 0)) {
            this.state = 159;
            this.elementProps();
        }

        this.state = 162;
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
        this.state = 164;
        this.match(SHRDataElementParser.KW_ELEMENT);
        this.state = 165;
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
        this.state = 167;
        this.entryHeader();
        this.state = 169;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRDataElementParser.KW_BASED_ON) | (1 << SHRDataElementParser.KW_CONCEPT) | (1 << SHRDataElementParser.KW_DESCRIPTION))) !== 0)) {
            this.state = 168;
            this.elementProps();
        }

        this.state = 171;
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

EntryHeaderContext.prototype.KW_ENTRY_ELEMENT = function() {
    return this.getToken(SHRDataElementParser.KW_ENTRY_ELEMENT, 0);
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
        this.state = 173;
        this.match(SHRDataElementParser.KW_ENTRY_ELEMENT);
        this.state = 174;
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
    this.enterRule(localctx, 26, SHRDataElementParser.RULE_elementProps);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 177; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 176;
            this.elementProp();
            this.state = 179; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRDataElementParser.KW_BASED_ON) | (1 << SHRDataElementParser.KW_CONCEPT) | (1 << SHRDataElementParser.KW_DESCRIPTION))) !== 0));
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

ElementPropContext.prototype.basedOnProp = function() {
    return this.getTypedRuleContext(BasedOnPropContext,0);
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
    this.enterRule(localctx, 28, SHRDataElementParser.RULE_elementProp);
    try {
        this.state = 184;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.KW_BASED_ON:
            this.enterOuterAlt(localctx, 1);
            this.state = 181;
            this.basedOnProp();
            break;
        case SHRDataElementParser.KW_CONCEPT:
            this.enterOuterAlt(localctx, 2);
            this.state = 182;
            this.conceptProp();
            break;
        case SHRDataElementParser.KW_DESCRIPTION:
            this.enterOuterAlt(localctx, 3);
            this.state = 183;
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
    this.enterRule(localctx, 30, SHRDataElementParser.RULE_values);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 187;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_VALUE) {
            this.state = 186;
            this.value();
        }

        this.state = 192;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRDataElementParser.KW_REF || _la===SHRDataElementParser.KW_TBD || ((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (SHRDataElementParser.OPEN_PAREN - 34)) | (1 << (SHRDataElementParser.KW_BOOLEAN - 34)) | (1 << (SHRDataElementParser.KW_INTEGER - 34)) | (1 << (SHRDataElementParser.KW_STRING - 34)) | (1 << (SHRDataElementParser.KW_DECIMAL - 34)) | (1 << (SHRDataElementParser.KW_URI - 34)) | (1 << (SHRDataElementParser.KW_BASE64_BINARY - 34)) | (1 << (SHRDataElementParser.KW_INSTANT - 34)) | (1 << (SHRDataElementParser.KW_DATE - 34)) | (1 << (SHRDataElementParser.KW_DATE_TIME - 34)) | (1 << (SHRDataElementParser.KW_TIME - 34)) | (1 << (SHRDataElementParser.KW_CODE - 34)) | (1 << (SHRDataElementParser.KW_OID - 34)) | (1 << (SHRDataElementParser.KW_ID - 34)) | (1 << (SHRDataElementParser.KW_MARKDOWN - 34)) | (1 << (SHRDataElementParser.KW_UNSIGNED_INT - 34)) | (1 << (SHRDataElementParser.KW_POSITIVE_INT - 34)) | (1 << (SHRDataElementParser.KW_XHTML - 34)) | (1 << (SHRDataElementParser.WHOLE_NUMBER - 34)) | (1 << (SHRDataElementParser.ALL_CAPS - 34)) | (1 << (SHRDataElementParser.UPPER_WORD - 34)) | (1 << (SHRDataElementParser.DOT_SEPARATED_UW - 34)))) !== 0)) {
            this.state = 189;
            this.field();
            this.state = 194;
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

ValueContext.prototype.count = function() {
    return this.getTypedRuleContext(CountContext,0);
};

ValueContext.prototype.OPEN_PAREN = function() {
    return this.getToken(SHRDataElementParser.OPEN_PAREN, 0);
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


ValueContext.prototype.CLOSE_PAREN = function() {
    return this.getToken(SHRDataElementParser.CLOSE_PAREN, 0);
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
    this.enterRule(localctx, 32, SHRDataElementParser.RULE_value);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        this.match(SHRDataElementParser.KW_VALUE);
        this.state = 197;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.WHOLE_NUMBER) {
            this.state = 196;
            this.count();
        }

        this.state = 200;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.OPEN_PAREN) {
            this.state = 199;
            this.match(SHRDataElementParser.OPEN_PAREN);
        }

        this.state = 202;
        this.valueType();
        this.state = 207;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRDataElementParser.KW_OR) {
            this.state = 203;
            this.match(SHRDataElementParser.KW_OR);
            this.state = 204;
            this.valueType();
            this.state = 209;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 211;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.CLOSE_PAREN) {
            this.state = 210;
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

ValueTypeContext.prototype.ref = function() {
    return this.getTypedRuleContext(RefContext,0);
};

ValueTypeContext.prototype.primitive = function() {
    return this.getTypedRuleContext(PrimitiveContext,0);
};

ValueTypeContext.prototype.codeFromVS = function() {
    return this.getTypedRuleContext(CodeFromVSContext,0);
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
    this.enterRule(localctx, 34, SHRDataElementParser.RULE_valueType);
    try {
        this.state = 219;
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 213;
            this.simpleOrFQName();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 214;
            this.ref();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 215;
            this.primitive();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 216;
            this.codeFromVS();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 217;
            this.elementWithConstraint();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 218;
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

FieldContext.prototype.fieldType = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FieldTypeContext);
    } else {
        return this.getTypedRuleContext(FieldTypeContext,i);
    }
};

FieldContext.prototype.count = function() {
    return this.getTypedRuleContext(CountContext,0);
};

FieldContext.prototype.OPEN_PAREN = function() {
    return this.getToken(SHRDataElementParser.OPEN_PAREN, 0);
};

FieldContext.prototype.KW_OR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRDataElementParser.KW_OR);
    } else {
        return this.getToken(SHRDataElementParser.KW_OR, i);
    }
};


FieldContext.prototype.CLOSE_PAREN = function() {
    return this.getToken(SHRDataElementParser.CLOSE_PAREN, 0);
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
    this.enterRule(localctx, 36, SHRDataElementParser.RULE_field);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 222;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.WHOLE_NUMBER) {
            this.state = 221;
            this.count();
        }

        this.state = 225;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.OPEN_PAREN) {
            this.state = 224;
            this.match(SHRDataElementParser.OPEN_PAREN);
        }

        this.state = 227;
        this.fieldType();
        this.state = 232;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRDataElementParser.KW_OR) {
            this.state = 228;
            this.match(SHRDataElementParser.KW_OR);
            this.state = 229;
            this.fieldType();
            this.state = 234;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 236;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.CLOSE_PAREN) {
            this.state = 235;
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

function FieldTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_fieldType;
    return this;
}

FieldTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldTypeContext.prototype.constructor = FieldTypeContext;

FieldTypeContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

FieldTypeContext.prototype.ref = function() {
    return this.getTypedRuleContext(RefContext,0);
};

FieldTypeContext.prototype.elementWithConstraint = function() {
    return this.getTypedRuleContext(ElementWithConstraintContext,0);
};

FieldTypeContext.prototype.tbd = function() {
    return this.getTypedRuleContext(TbdContext,0);
};

FieldTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterFieldType(this);
	}
};

FieldTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitFieldType(this);
	}
};

FieldTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitFieldType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.FieldTypeContext = FieldTypeContext;

SHRDataElementParser.prototype.fieldType = function() {

    var localctx = new FieldTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, SHRDataElementParser.RULE_fieldType);
    try {
        this.state = 242;
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 238;
            this.simpleOrFQName();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 239;
            this.ref();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 240;
            this.elementWithConstraint();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 241;
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

function BasedOnPropContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_basedOnProp;
    return this;
}

BasedOnPropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BasedOnPropContext.prototype.constructor = BasedOnPropContext;

BasedOnPropContext.prototype.KW_BASED_ON = function() {
    return this.getToken(SHRDataElementParser.KW_BASED_ON, 0);
};

BasedOnPropContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

BasedOnPropContext.prototype.tbd = function() {
    return this.getTypedRuleContext(TbdContext,0);
};

BasedOnPropContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterBasedOnProp(this);
	}
};

BasedOnPropContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitBasedOnProp(this);
	}
};

BasedOnPropContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitBasedOnProp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.BasedOnPropContext = BasedOnPropContext;

SHRDataElementParser.prototype.basedOnProp = function() {

    var localctx = new BasedOnPropContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, SHRDataElementParser.RULE_basedOnProp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 244;
        this.match(SHRDataElementParser.KW_BASED_ON);
        this.state = 247;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.DOT_SEPARATED_UW:
            this.state = 245;
            this.simpleOrFQName();
            break;
        case SHRDataElementParser.KW_TBD:
            this.state = 246;
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
    this.enterRule(localctx, 42, SHRDataElementParser.RULE_conceptProp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 249;
        this.match(SHRDataElementParser.KW_CONCEPT);
        this.state = 252;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.KW_TBD_CODE:
        case SHRDataElementParser.ALL_CAPS:
            this.state = 250;
            this.concepts();
            break;
        case SHRDataElementParser.KW_TBD:
            this.state = 251;
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
    this.enterRule(localctx, 44, SHRDataElementParser.RULE_concepts);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 254;
        this.fullyQualifiedCode();
        this.state = 259;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRDataElementParser.COMMA) {
            this.state = 255;
            this.match(SHRDataElementParser.COMMA);
            this.state = 256;
            this.fullyQualifiedCode();
            this.state = 261;
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
    this.enterRule(localctx, 46, SHRDataElementParser.RULE_descriptionProp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 262;
        this.match(SHRDataElementParser.KW_DESCRIPTION);
        this.state = 263;
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
    this.enterRule(localctx, 48, SHRDataElementParser.RULE_version);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 265;
        this.match(SHRDataElementParser.WHOLE_NUMBER);
        this.state = 266;
        this.match(SHRDataElementParser.DOT);
        this.state = 267;
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
    this.enterRule(localctx, 50, SHRDataElementParser.RULE_namespace);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 269;
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
    this.enterRule(localctx, 52, SHRDataElementParser.RULE_simpleName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 271;
        _la = this._input.LA(1);
        if(!(_la===SHRDataElementParser.ALL_CAPS || _la===SHRDataElementParser.UPPER_WORD)) {
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
    this.enterRule(localctx, 54, SHRDataElementParser.RULE_fullyQualifiedName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 273;
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
    this.enterRule(localctx, 56, SHRDataElementParser.RULE_simpleOrFQName);
    try {
        this.state = 277;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
            this.enterOuterAlt(localctx, 1);
            this.state = 275;
            this.simpleName();
            break;
        case SHRDataElementParser.DOT_SEPARATED_UW:
            this.enterOuterAlt(localctx, 2);
            this.state = 276;
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

function RefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_ref;
    return this;
}

RefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RefContext.prototype.constructor = RefContext;

RefContext.prototype.KW_REF = function() {
    return this.getToken(SHRDataElementParser.KW_REF, 0);
};

RefContext.prototype.OPEN_PAREN = function() {
    return this.getToken(SHRDataElementParser.OPEN_PAREN, 0);
};

RefContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

RefContext.prototype.CLOSE_PAREN = function() {
    return this.getToken(SHRDataElementParser.CLOSE_PAREN, 0);
};

RefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterRef(this);
	}
};

RefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitRef(this);
	}
};

RefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitRef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.RefContext = RefContext;

SHRDataElementParser.prototype.ref = function() {

    var localctx = new RefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, SHRDataElementParser.RULE_ref);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 279;
        this.match(SHRDataElementParser.KW_REF);
        this.state = 280;
        this.match(SHRDataElementParser.OPEN_PAREN);
        this.state = 281;
        this.simpleOrFQName();
        this.state = 282;
        this.match(SHRDataElementParser.CLOSE_PAREN);
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
    this.enterRule(localctx, 60, SHRDataElementParser.RULE_code);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 284;
        this.match(SHRDataElementParser.CODE);
        this.state = 286;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.STRING) {
            this.state = 285;
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
    this.enterRule(localctx, 62, SHRDataElementParser.RULE_fullyQualifiedCode);
    try {
        this.state = 291;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.ALL_CAPS:
            this.enterOuterAlt(localctx, 1);
            this.state = 288;
            this.match(SHRDataElementParser.ALL_CAPS);
            this.state = 289;
            this.code();
            break;
        case SHRDataElementParser.KW_TBD_CODE:
            this.enterOuterAlt(localctx, 2);
            this.state = 290;
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
    this.enterRule(localctx, 64, SHRDataElementParser.RULE_codeOrFQCode);
    try {
        this.state = 295;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.KW_TBD_CODE:
        case SHRDataElementParser.ALL_CAPS:
            this.enterOuterAlt(localctx, 1);
            this.state = 293;
            this.fullyQualifiedCode();
            break;
        case SHRDataElementParser.CODE:
            this.enterOuterAlt(localctx, 2);
            this.state = 294;
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

function CodeFromVSContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_codeFromVS;
    return this;
}

CodeFromVSContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CodeFromVSContext.prototype.constructor = CodeFromVSContext;

CodeFromVSContext.prototype.KW_FROM = function() {
    return this.getToken(SHRDataElementParser.KW_FROM, 0);
};

CodeFromVSContext.prototype.valueset = function() {
    return this.getTypedRuleContext(ValuesetContext,0);
};

CodeFromVSContext.prototype.KW_CODE = function() {
    return this.getToken(SHRDataElementParser.KW_CODE, 0);
};

CodeFromVSContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

CodeFromVSContext.prototype.bindingInfix = function() {
    return this.getTypedRuleContext(BindingInfixContext,0);
};

CodeFromVSContext.prototype.KW_IF_COVERED = function() {
    return this.getToken(SHRDataElementParser.KW_IF_COVERED, 0);
};

CodeFromVSContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterCodeFromVS(this);
	}
};

CodeFromVSContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitCodeFromVS(this);
	}
};

CodeFromVSContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitCodeFromVS(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.CodeFromVSContext = CodeFromVSContext;

SHRDataElementParser.prototype.codeFromVS = function() {

    var localctx = new CodeFromVSContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, SHRDataElementParser.RULE_codeFromVS);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 299;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.KW_CODE:
            this.state = 297;
            this.match(SHRDataElementParser.KW_CODE);
            break;
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.DOT_SEPARATED_UW:
            this.state = 298;
            this.simpleOrFQName();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 302;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRDataElementParser.KW_MUST_BE) | (1 << SHRDataElementParser.KW_SHOULD_BE) | (1 << SHRDataElementParser.KW_COULD_BE))) !== 0)) {
            this.state = 301;
            this.bindingInfix();
        }

        this.state = 304;
        this.match(SHRDataElementParser.KW_FROM);
        this.state = 305;
        this.valueset();
        this.state = 307;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_IF_COVERED) {
            this.state = 306;
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

BindingInfixContext.prototype.KW_MUST_BE = function() {
    return this.getToken(SHRDataElementParser.KW_MUST_BE, 0);
};

BindingInfixContext.prototype.KW_SHOULD_BE = function() {
    return this.getToken(SHRDataElementParser.KW_SHOULD_BE, 0);
};

BindingInfixContext.prototype.KW_COULD_BE = function() {
    return this.getToken(SHRDataElementParser.KW_COULD_BE, 0);
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
    this.enterRule(localctx, 68, SHRDataElementParser.RULE_bindingInfix);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 309;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRDataElementParser.KW_MUST_BE) | (1 << SHRDataElementParser.KW_SHOULD_BE) | (1 << SHRDataElementParser.KW_COULD_BE))) !== 0))) {
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

ElementWithConstraintContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

ElementWithConstraintContext.prototype.elementPath = function() {
    return this.getTypedRuleContext(ElementPathContext,0);
};

ElementWithConstraintContext.prototype.primitive = function() {
    return this.getTypedRuleContext(PrimitiveContext,0);
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
    this.enterRule(localctx, 70, SHRDataElementParser.RULE_elementWithConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 314;
        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
        switch(la_) {
        case 1:
            this.state = 311;
            this.simpleOrFQName();
            break;

        case 2:
            this.state = 312;
            this.elementPath();
            break;

        case 3:
            this.state = 313;
            this.primitive();
            break;

        }
        this.state = 317;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRDataElementParser.KW_WITH) | (1 << SHRDataElementParser.KW_IS) | (1 << SHRDataElementParser.KW_IS_TYPE) | (1 << SHRDataElementParser.KW_VALUE_IS_TYPE) | (1 << SHRDataElementParser.KW_INCLUDES))) !== 0)) {
            this.state = 316;
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
    this.enterRule(localctx, 72, SHRDataElementParser.RULE_elementPath);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 319;
        this.simpleOrFQName();
        this.state = 339;
        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
        switch(la_) {
        case 1:
            this.state = 322; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 320;
            		this.match(SHRDataElementParser.DOT);
            		this.state = 321;
            		this.simpleName();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 324; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,37, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 328;
            _la = this._input.LA(1);
            if(_la===SHRDataElementParser.DOT) {
                this.state = 326;
                this.match(SHRDataElementParser.DOT);
                this.state = 327;
                this.primitive();
            }

            break;

        case 2:
            this.state = 334;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,39,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 330;
                    this.match(SHRDataElementParser.DOT);
                    this.state = 331;
                    this.simpleName(); 
                }
                this.state = 336;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,39,this._ctx);
            }

            this.state = 337;
            this.match(SHRDataElementParser.DOT);
            this.state = 338;
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

ElementConstraintContext.prototype.elementWithUnitsConstraint = function() {
    return this.getTypedRuleContext(ElementWithUnitsConstraintContext,0);
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
    this.enterRule(localctx, 74, SHRDataElementParser.RULE_elementConstraint);
    try {
        this.state = 347;
        var la_ = this._interp.adaptivePredict(this._input,41,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 341;
            this.elementCodeVSConstraint();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 342;
            this.elementCodeValueConstraint();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 343;
            this.elementIncludesCodeValueConstraint();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 344;
            this.elementBooleanConstraint();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 345;
            this.elementTypeConstraint();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 346;
            this.elementWithUnitsConstraint();
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

ElementCodeVSConstraintContext.prototype.KW_WITH = function() {
    return this.getToken(SHRDataElementParser.KW_WITH, 0);
};

ElementCodeVSConstraintContext.prototype.codeFromVS = function() {
    return this.getTypedRuleContext(CodeFromVSContext,0);
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
    this.enterRule(localctx, 76, SHRDataElementParser.RULE_elementCodeVSConstraint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 349;
        this.match(SHRDataElementParser.KW_WITH);
        this.state = 350;
        this.codeFromVS();
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

ElementCodeValueConstraintContext.prototype.KW_IS = function() {
    return this.getToken(SHRDataElementParser.KW_IS, 0);
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
    this.enterRule(localctx, 78, SHRDataElementParser.RULE_elementCodeValueConstraint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 352;
        this.match(SHRDataElementParser.KW_IS);
        this.state = 353;
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
    this.enterRule(localctx, 80, SHRDataElementParser.RULE_elementIncludesCodeValueConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 357; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 355;
            this.match(SHRDataElementParser.KW_INCLUDES);
            this.state = 356;
            this.codeOrFQCode();
            this.state = 359; 
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

ElementBooleanConstraintContext.prototype.KW_IS = function() {
    return this.getToken(SHRDataElementParser.KW_IS, 0);
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
    this.enterRule(localctx, 82, SHRDataElementParser.RULE_elementBooleanConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 361;
        this.match(SHRDataElementParser.KW_IS);
        this.state = 362;
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

ElementTypeConstraintContext.prototype.KW_IS_TYPE = function() {
    return this.getToken(SHRDataElementParser.KW_IS_TYPE, 0);
};

ElementTypeConstraintContext.prototype.KW_VALUE_IS_TYPE = function() {
    return this.getToken(SHRDataElementParser.KW_VALUE_IS_TYPE, 0);
};

ElementTypeConstraintContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
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
    this.enterRule(localctx, 84, SHRDataElementParser.RULE_elementTypeConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 364;
        _la = this._input.LA(1);
        if(!(_la===SHRDataElementParser.KW_IS_TYPE || _la===SHRDataElementParser.KW_VALUE_IS_TYPE)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 367;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.DOT_SEPARATED_UW:
            this.state = 365;
            this.simpleOrFQName();
            break;
        case SHRDataElementParser.KW_TBD:
            this.state = 366;
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

function ElementWithUnitsConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementWithUnitsConstraint;
    return this;
}

ElementWithUnitsConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementWithUnitsConstraintContext.prototype.constructor = ElementWithUnitsConstraintContext;

ElementWithUnitsConstraintContext.prototype.KW_WITH = function() {
    return this.getToken(SHRDataElementParser.KW_WITH, 0);
};

ElementWithUnitsConstraintContext.prototype.KW_UNITS = function() {
    return this.getToken(SHRDataElementParser.KW_UNITS, 0);
};

ElementWithUnitsConstraintContext.prototype.fullyQualifiedCode = function() {
    return this.getTypedRuleContext(FullyQualifiedCodeContext,0);
};

ElementWithUnitsConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementWithUnitsConstraint(this);
	}
};

ElementWithUnitsConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementWithUnitsConstraint(this);
	}
};

ElementWithUnitsConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementWithUnitsConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementWithUnitsConstraintContext = ElementWithUnitsConstraintContext;

SHRDataElementParser.prototype.elementWithUnitsConstraint = function() {

    var localctx = new ElementWithUnitsConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, SHRDataElementParser.RULE_elementWithUnitsConstraint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 369;
        this.match(SHRDataElementParser.KW_WITH);
        this.state = 370;
        this.match(SHRDataElementParser.KW_UNITS);
        this.state = 371;
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
    this.enterRule(localctx, 88, SHRDataElementParser.RULE_valueset);
    try {
        this.state = 378;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.URL:
            this.enterOuterAlt(localctx, 1);
            this.state = 373;
            this.match(SHRDataElementParser.URL);
            break;
        case SHRDataElementParser.PATH_URL:
            this.enterOuterAlt(localctx, 2);
            this.state = 374;
            this.match(SHRDataElementParser.PATH_URL);
            break;
        case SHRDataElementParser.URN_OID:
            this.enterOuterAlt(localctx, 3);
            this.state = 375;
            this.match(SHRDataElementParser.URN_OID);
            break;
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
            this.enterOuterAlt(localctx, 4);
            this.state = 376;
            this.simpleName();
            break;
        case SHRDataElementParser.KW_TBD:
            this.enterOuterAlt(localctx, 5);
            this.state = 377;
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

PrimitiveContext.prototype.KW_CODE = function() {
    return this.getToken(SHRDataElementParser.KW_CODE, 0);
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
    this.enterRule(localctx, 90, SHRDataElementParser.RULE_primitive);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 380;
        _la = this._input.LA(1);
        if(!(((((_la - 42)) & ~0x1f) == 0 && ((1 << (_la - 42)) & ((1 << (SHRDataElementParser.KW_BOOLEAN - 42)) | (1 << (SHRDataElementParser.KW_INTEGER - 42)) | (1 << (SHRDataElementParser.KW_STRING - 42)) | (1 << (SHRDataElementParser.KW_DECIMAL - 42)) | (1 << (SHRDataElementParser.KW_URI - 42)) | (1 << (SHRDataElementParser.KW_BASE64_BINARY - 42)) | (1 << (SHRDataElementParser.KW_INSTANT - 42)) | (1 << (SHRDataElementParser.KW_DATE - 42)) | (1 << (SHRDataElementParser.KW_DATE_TIME - 42)) | (1 << (SHRDataElementParser.KW_TIME - 42)) | (1 << (SHRDataElementParser.KW_CODE - 42)) | (1 << (SHRDataElementParser.KW_OID - 42)) | (1 << (SHRDataElementParser.KW_ID - 42)) | (1 << (SHRDataElementParser.KW_MARKDOWN - 42)) | (1 << (SHRDataElementParser.KW_UNSIGNED_INT - 42)) | (1 << (SHRDataElementParser.KW_POSITIVE_INT - 42)) | (1 << (SHRDataElementParser.KW_XHTML - 42)))) !== 0))) {
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
    this.enterRule(localctx, 92, SHRDataElementParser.RULE_count);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 382;
        this.match(SHRDataElementParser.WHOLE_NUMBER);
        this.state = 383;
        this.match(SHRDataElementParser.RANGE);
        this.state = 384;
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
    this.enterRule(localctx, 94, SHRDataElementParser.RULE_tbd);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 386;
        this.match(SHRDataElementParser.KW_TBD);
        this.state = 388;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.STRING) {
            this.state = 387;
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
    this.enterRule(localctx, 96, SHRDataElementParser.RULE_tbdCode);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 390;
        this.match(SHRDataElementParser.KW_TBD_CODE);
        this.state = 392;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.STRING) {
            this.state = 391;
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

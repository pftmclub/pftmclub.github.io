/***********************************************
* Omni Slide Menu script - © John Davenport Scheuer
* very freely adapted from Dynamic-FX Slide-In Menu (v 6.5) script- by maXimus
* This notice MUST stay intact for legal use
* Visit Dynamic Drive at http://www.dynamicdrive.com/ for full original source code
* as first mentioned in http://www.dynamicdrive.com/forums
* username:jscheuer1
***********************************************/

//One global variable to set, use true if you want the menus to reinit when the user changes text size (recommended):
resizereinit=true;

menu[3] = {
id:'kbmenu3', //use unique quoted id (quoted) REQUIRED!!
bartext:'Menu',
menupos:'left',
kviewtype:'fixed', 
menuItems:[ // REQUIRED!!
//[name, link, target, colspan, endrow?] - leave 'link' and 'target' blank to make a header
["VnSharing Group"], //create header
["Thông báo", "http://vnsharing.net/forum/forumdisplay.php?f=2", "", 1, "no"],
["Ý kiến đóng góp", "http://vnsharing.net/forum/forumdisplay.php?f=3","", 1, "no"],
["TTX VnSharing", "http://vnsharing.net/forum/forumdisplay.php?f=162", "", 1],

["Hướng dẫn - Hỏi đáp", "http://vnsharing.net/forum/forumdisplay.php?f=4", "", 1, "no"],
["Manga & Anime Wiki", "http://vnsharing.net/forum/forumdisplay.php?f=142", "", 1, "no"],
["VIP Box", "http://vnsharing.net/forum/forumdisplay.php?f=171", "", 1],


["Manga", "", ""], //create header
["Thảo luận về Manga", "http://vnsharing.net/forum/forumdisplay.php?f=218", "", 1, "no"],
["Truyện dịch", "http://vnsharing.net/forum/forumdisplay.php?f=24", "", 1, "no"],
["Download Manga", "http://vnsharing.net/forum/forumdisplay.php?f=25", "", 1],

["Anime", "", ""],
["Thảo luận về Anime", "http://vnsharing.net/forum/forumdisplay.php?f=37", "", 1, "no"],
["VnSharing Fansub", "http://vnsharing.net/forum/forumdisplay.php?f=157", "", 1, "no"],
["Download Anime HQ", "http://vnsharing.net/forum/forumdisplay.php?f=38", "", 1, ""],
["Download Anime LQ", "http://vnsharing.net/forum/forumdisplay.php?f=153", "", 1, "no"],
["Hình Anime & Manga", "http://vnsharing.net/forum/forumdisplay.php?f=9", "", 1, "no"],
["Xem Anime Online", "http://vnsharing.net/forum/forumdisplay.php?f=254", "", 1],

["Games", "", ""],
["Games Offline", "http://vnsharing.net/forum/forumdisplay.php?f=43", "", 1, "no"],
["Games Online", "http://vnsharing.net/forum/forumdisplay.php?f=42", "", 1, "no"],
["Download Games ", "http://vnsharing.net/forum/forumdisplay.php?f=106", "", 1],

["Fan Clubs", "", ""],
["Mitsuru Adachi FC", "http://vnsharing.net/forum/forumdisplay.php?f=48", "", 1, "no"],
["Clamp FC", "http://vnsharing.net/forum/forumdisplay.php?f=84", "", 1, "no"],
["Origami FC", "http://vnsharing.net/forum/forumdisplay.php?f=91", "", 1],
["Ecchi FC", "http://vnsharing.net/forum/forumdisplay.php?f=103", "", 1, "no"],
["Shounen-ai FC", "http://vnsharing.net/forum/forumdisplay.php?f=129", "", 1, "no"],
["Ken Akamatsu FC", "http://vnsharing.net/forum/forumdisplay.php?f=192", "", 1],
["Mecha FC", "http://vnsharing.net/forum/forumdisplay.php?f=211", "", 1, "no"],
["One Piece Fans-Club", "http://vnsharing.net/forum/forumdisplay.php?f=377", "", 1, "no"],
["Final Fantasy FC", "http://vnsharing.net/forum/forumdisplay.php?f=375", "", 1],

["VnSharing School", "", ""],
["VnComic", "http://vnsharing.net/forum/forumdisplay.php?f=47", "", 1, "no"],
["English", "http://vnsharing.net/forum/forumdisplay.php?f=167", "", 1, "no"],
["Tiếng Nhật", "http://vnsharing.net/forum/forumdisplay.php?f=88", "", 1],
["IT (CNTT)", "http://vnsharing.net/forum/forumdisplay.php?f=221", "", 1, "no"],
["Lịch Sử - Văn Hóa", "http://vnsharing.net/forum/forumdisplay.php?f=156", "", 1, "no"],
["Khoa Học Tự Nhiên", "http://vnsharing.net/forum/forumdisplay.php?f=296", "", 1],
["Graphic Club", "http://vnsharing.net/forum/forumdisplay.php?f=147", "", 1],

["Những lĩnh vực khác", "", ""],
["Phim Ảnh - Movie", "http://vnsharing.net/forum/forumdisplay.php?f=168", "", 1, "no"],
["Drama", "http://vnsharing.net/forum/forumdisplay.php?f=209", "", 1, "no"],
["Comic", "http://vnsharing.net/forum/forumdisplay.php?f=173", "", 1],
["1 2 3 Cười !!!", "http://vnsharing.net/forum/forumdisplay.php?f=19", "", 1, "no"],
["Giao lưu", "http://vnsharing.net/forum/forumdisplay.php?f=14", "", 1, "no"],
["Thế giới ngòi bút", "http://vnsharing.net/forum/forumdisplay.php?f=10", "", 1],

["Music Center", "", ""],
["Thư viện âm nhạc", "http://vnsharing.net/forum/forumdisplay.php?f=28", "", 1, "no"],
["Lossless Music", "http://vnsharing.net/forum/forumdisplay.php?f=204", "", 1, "no"],
["J-Rock", "http://vnsharing.net/forum/forumdisplay.php?f=362", "", 1],

["Others", "", ""],
["Quảng cáo", "http://vnsharing.net/forum/forumdisplay.php?f=16", "", 1, "no"],
["Mua Bán", "http://vnsharing.net/forum/forumdisplay.php?f=105", "", 1, "no"],
["Thùng rác", "http://vnsharing.net/forum/forumdisplay.php?f=17", "", 1],

["Nhấn double click (nháy đôi chuột tr�i) để tắt khung này!", "", ""],

]}; // REQUIRED!! do not edit or remove

////////////////////Stop Editing/////////////////

make_menus();
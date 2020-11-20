function uploadFiles(url) {
  var response =  UrlFetchApp.fetch(url)
  var fileName  = getFilenameFromURL(url)
  var folder = DriveApp.getFolderById('1OO9yGEDGbN-3e8417rIkfV8FAjXuvZit');
  var blob = response.getBlob();
  var file = folder.createFile(blob)
  file.setName(fileName)
  file.setDescription("Download from the " + url)
  return file.getUrl();
}


function getFilenameFromURL(url) {
  //(host-ish)/(path-ish/)(filename)
  var re = /^https?:\/\/([^\/]+)\/([^?]*\/)?([^\/?]+)/;
  var match = re.exec(url);
  if (match) {
    return unescape(match[3]);
  }
  return null;
}


function doGet(e){
var html  =  HtmlService.createHtmlOutputFromFile('index.html')
return html.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
}
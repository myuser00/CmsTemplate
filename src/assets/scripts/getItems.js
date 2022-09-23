function getLanguageListName(listName, language) {
  if (language) {
    listName += "_" + language;
  }
  return listName;
}

//tüm liste öğelerini getirir
//getListItems('haberler','en-US')
function getListItems(listName, language) {
  debugger;
  var result = new Array();
  listName = this.getLanguageListName(listName, language);
  //https://localhost:44343/api/country
  //http://localhost:85/haberler_en-US.json
  const Http = new XMLHttpRequest(); const url = 'http://localhost:85/haberler_en-US.json';
  Http.open("GET", url, false);
  Http.send();
  alert("getItem.js gelen");
  return JSON.parse(Http.responseText);
}


//Sayfa numarası 1'den başlar.
//Listeleme sayfaları için kullanılır.
//getListItemsWithPaging('haberler',1,30,'','en-US')
function getListItemsWithPaging(
  listName,
  page,
  pageSize,
  searchTerm,
  language
) {
  var listName = getLanguageListName("menu", language);
  var result = new Array();
  $.ajax({
    async: false,
    url: listName + ".json",
    success: function (data) {
      result = data;
      return data;
    },
  });
  var filteredResult = result;
  if (searchTerm != null) {
    filteredResult = filteredResult.filter(
      (i) => JSON.stringify(i).indexOf(searchTerm) >= 0
    );
  }
  filteredResult = filteredResult.slice(
    (page - 1) * pageSize,
    (page - 1) * pageSize + pageSize
  );

  return {
    totalPageCount: Math.ceil(filteredResult.length / pageSize),
    totalCount: filteredResult.length,
    items: filteredResult
  };
}

//detay sayfası içeriğini getirir.
//getItemById('haberler',3,'en-US')
function getItemById(listName, id, language) {
  var result = new Array();
  listName = getLanguageListName(listName, language);
  $.ajax({
    async: false,
    url: listName + ".json",
    success: function (data) {
      result = data;
      return data;
    },
  });
  return result.filter((i) => i.id == id)[0];
}
function denemeAlert() {
  alert('test deneme alert');
}
function denemeLog() {
  console.log('test deneme Log');
}

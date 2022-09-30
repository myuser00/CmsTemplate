function getLanguageListName(listName, language) {
  if (language) {
    listName += "_" + language;
  }
  return listName;
}

//tüm liste öğelerini getirir
function getListItems(listName, language) {
	debugger;
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
  return result;
}



//Sayfa numarası 1'den başlar.
//Listeleme sayfaları için kullanılır.
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
function denemeAlert(){
	alert('test deneme alert');
}
function denemeLog(){
	console.log('test deneme Log');
}

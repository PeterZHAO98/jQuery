$("#ch3form").submit(function() {
    if($("input[name='fruit']:checked").length > 0 && $("input[name='standing']:checked").length > 0){
        // console.log($("input[name='fruit']:checked"));
        return true;
    }

    alert("You must pick a fruit and a class standing!");
    return false;
  });
$(document).ready(function(){ 
  var l_type = $("#custom-list").attr("l_type");
  var slice_arr = new Array();
  var slice_tmp = new Array(0, 0);
  var post_b = $(".post-body")
    .children("ol")
    .find("li")
    .contents()
    .filter(function() {
      var value_bool = true;
      if (this.nodeValue) {
        value_bool = this.nodeValue.trim() !== "";
      }
      return value_bool && this.nodeName !== "OL";
    });

  for (const k in post_b) {
    if (post_b.hasOwnProperty(k) && parseInt(k) > 0) {
      const e = post_b[parseInt(k)];
      const e_p = post_b[parseInt(k) - 1];
      if (e.parentElement === e_p.parentElement) {
        slice_tmp[1] = parseInt(k) + 1;
      } else {
        slice_tmp[1] = parseInt(k);
        slice_arr.push(slice_tmp);
        slice_tmp = new Array(parseInt(k), parseInt(k));
      }
    }
  }
  slice_tmp[1] = slice_tmp[1] + 1;
  slice_arr.push(slice_tmp);

  $(".post-body")
    .children("ol")
    .addClass(l_type);

  for (const k in slice_arr) {
    if (slice_arr.hasOwnProperty(k)) {
      const e = slice_arr[k];
      post_b.slice(e[0], e[1]).wrapAll("<l-li/>");
    }
  }

  $("head").append('<link href="/lib/custom-list/css/custom.css" rel="stylesheet" type="text/css" />');
}); 
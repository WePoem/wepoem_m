
var msg_tips = 	[
					'提交失败！请重新提交',
					'你太棒了！编辑成功',
					'恭喜你！新增成功',
					'开发中！嫑点我',
					'重新提交'
				],
	msg_status= [
					'success',
					'error'
				];
/**
 * ajax 请求中间层
 */
function global_ajax(type,url,data){
	// console.log(type,url,data);
	var list;
	if (type=='get') { //获取列表
		$.ajax({
		  url : url,
		  dataType : 'json',
		  data: data,
		  type : type,
		  async : false,
		  contentType : "application/json",
		  success : function(data) {
		  	list = data;
		  },
		  error: function(err){
		  	layer.msg(err);
		  }
		})
	}else if(type=='post'){  //新增
		$.ajax({
		  url : url,
		  dataType : 'json',
		  type : type,
		  data : data,
		  async : false,
		  contentType : "application/json",
		  success : function(data) {
		  	list = data;
		  },
		  error: function(err){
		  	layer.msg(err);
		  }
		})
	}else if(type=='put'){ //编辑
		$.ajax({
		  url : url,
		  dataType : 'json',
		  type : type,
		  data : data,
		  async : false,
		  contentType : "application/json",
		  success : function(data) {
		  	list = data;
		  },
		  error: function(err){
		  	layer.msg(err);
		  }
		})
	}else if(type=='delete'){  //删除 暂时不做
		// $.ajax({
		//   url : url,
		//   dataType : 'json',
		//   type : type,
		//   async : false,
		//   contentType : "application/json",
		//   success : function(data) {
		//   	list = data;
		//   },
		//   error: function(err){
		//   	layer.msg(err);
		//   }
		// })
	}
	return list;
}


function showSearchDiv(obj){
	$('.global-search-div').slideToggle();
}
function hideSearchDiv(obj){
	$(obj).closest('.global-search-div').slideToggle();
}

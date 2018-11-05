/**
 * 路由实现，单页面考虑
 */
(function() {
	let util = {
		//获取路由的路径和详细参数
		getParamsUrl:function(){
			let hashDeatail = location.hash.split("?"),
				hashName = hashDeatail[0].split("#")[1],//路由地址
				params = hashDeatail[1] ? hashDeatail[1].split("&") : [],//参数内容
				query = {};
			for(let i = 0;i<params.length ; i++){
				let item = params[i].split("=");
				query[item[0]] = item[1]
			}
			return 	{
				path:hashName,
				query:query
			}
		}
	}

	function iRouters(){
		this.routers = {};//用于保存注册的所有路由
	}

	iRouters.prototype={
		init:function(){
			let self = this;
			//页面加载匹配路由
			window.addEventListener('load',function(){
				self.urlChange()
			})
			//路由切换
			window.addEventListener('hashchange',function(){
				self.urlChange()
			})
			//异步引入js通过回调传递参数
			window.I_RESOLVE_INIT = null;
		},

		//刷新函数
		refresh:function(currentHash){
			let self = this;
			self.routers[currentHash.path].callback.call(self,currentHash)
		},
		//路由处理
		urlChange:function(){
			let currentHash = util.getParamsUrl();
			if(this.routers[currentHash.path]){
				this.refresh(currentHash)
			}else{
				//不存在的地址重定向到首页
				location.hash = '/homepage'
			}
		},

		//单层路由注册
		map:function(path,callback){
			path = path.replace(/\s*/g,"");//过滤空格
			if(callback && Object.prototype.toString.call(callback) === '[object Function]' ){
				this.routers[path] ={
					callback:callback,//回调
					fn:null //存储异步文件状态
				}
			}else{
				console.trace('注册'+path+'地址需要提供正确的的注册回调')
			}
		},

		//路由js加载实现
		asyncFun:function(file,transition){
		   let self = this;
		   if(self.routers[transition.path].fn){
		   		self.routers[transition.path].fn(transition)
		   }else{
               let app = document.getElementById('app');
               let scriptEle = document.createElement('div');
               scriptEle.setAttribute("id","appContext");
               app.appendChild(scriptEle);
               self.routers[transition.path].fn = file.I_RESOLVE_INIT;
               self.routers[transition.path].fn(transition)
		   }
		},
		//同步操作
		syncFun:function(callback,transition){
			callback && callback(transition)
		}

	}
	//注册到window全局
	window.iRouters = new iRouters();
})()
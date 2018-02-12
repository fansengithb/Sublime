function getresult(n){
				if (isNaN(n)) {
					alter(请输入数字);
				}else
				{
					return n*getresult(n-1);
				}
			}
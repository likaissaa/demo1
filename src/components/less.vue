<template>
	<div>
		<div id="header">
			nihao
			<div class="navigation">
				11111
			</div>
			<div class="logo">
				22222
			</div>
			<div class="clearfix">
				<div class="fl">ahahah </div>
				<div class="fr">jijiji</div>
			</div>
			<div class="element">
				<p>我是文字测试字体大小为30px</p>
			</div>
			<br />
			<div class="first">
				<div id="bundle">
					<button type="button" class="button">我是按钮</button>
					<div class="tab">我是tab 的样式测试</div>					

				</div>
			</div>
		</div>
	</div>
</template>
<script>
	const name = 'lux';
		console.log(`hello ${name}`)
</script>
<style scoped lang="less">
	@light-blue:red;
	.bordered{
		border-top:dotted 2px black;
		border-bottom:solid  2px red;
	}
	#header{
		color:@light-blue;
		.bordered
		.navigation {
			font-size:12px
		}
		.logo{
			width:300px;
			border:1px solid black;
		}
	}
	.clearfix{
		border:1px solid red;
		&:after{
			content:"";
			display:block;
			font-size:0;
			height:0;
			clear:both;
			visibility:hidden;
		}
	}
	.fl{
		float:left;
		width:50%;
	}
	.fr{
		float:right;
		width:50%
	}
	@min768: "(min-width: 768px)";
		.element {
			color:red;
			font-size:18px;
		  @media @min768 {
		  	border:2px solid red;
		    font-size: 30px;
		  }
		}
	
	#bundle {
		.button {
			display:block;
			width:100px;
			height:100px;
			border:1px solid black;
			background-color:grey;
			&:hover{
				background-color:white
			}
		}
	}
	#header button{
		#bundle >.button;
	}
	
</style>
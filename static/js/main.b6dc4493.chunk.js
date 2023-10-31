(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(7),c=n.n(a),u=n(1),o=n(2),l=n(4),s=n(3),h=n(5),p=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{style:v},this.props.value)}}]),n}(i.a.Component),v={boxSizing:"border-box",width:"100%",height:50,border:"2px solid black",textAlign:"right",background:"black",color:"white",fontWeight:700},f=p,d=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return i.a.createElement("button",{onClick:this.props.handleClick,style:k},this.props.value)}}]),n}(i.a.Component),k={width:50,height:50,background:"white",border:"2px solid black",fontSize:"inherit"},y=d,_=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"generateLayout",value:function(){for(var e=this,t=[],n=0;n<3;n++){for(var r=[],a=function(){var t=3*n+c+1;r.push(i.a.createElement(y,{handleClick:function(){return e.props.handleClick(t)},value:t}))},c=0;c<3;c++)a();t.push(i.a.createElement("div",null,r))}return t}},{key:"render",value:function(){var e=this.generateLayout();return i.a.createElement("div",null,e)}}]),n}(i.a.Component),b=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"generateLayout",value:function(){var e=this;return[i.a.createElement("div",null,i.a.createElement(y,{handleClick:function(){return e.props.handleClick("+")},value:"+"})),i.a.createElement("div",null,i.a.createElement(y,{handleClick:function(){return e.props.handleClick("-")},value:"-"})),i.a.createElement("div",null,i.a.createElement(y,{handleClick:function(){return e.props.handleClick("\xd7")},value:"\xd7"})),i.a.createElement("div",null,i.a.createElement(y,{handleClick:function(){return e.props.handleClick("\xf7")},value:"\xf7"}))]}},{key:"render",value:function(){var e=this.generateLayout();return i.a.createElement("div",null,e)}}]),n}(i.a.Component),m=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"generateLayout",value:function(){var e=this;return[[i.a.createElement(y,{handleClick:function(){return e.props.handleClick("AC")},value:"AC"}),i.a.createElement(y,{handleClick:function(){return e.props.handleClick(0)},value:"0"}),i.a.createElement(y,{handleClick:function(){return e.props.handleClick(".")},value:"."})],[i.a.createElement(y,{handleClick:function(){return e.props.handleClick("(")},value:"("}),i.a.createElement(y,{handleClick:function(){return e.props.handleClick(")")},value:")"}),i.a.createElement(y,{handleClick:function(){return e.props.handleClick("=")},value:"="})]]}},{key:"render",value:function(){var e=this.generateLayout();return i.a.createElement("div",null,e)}}]),n}(i.a.Component),C="INTEGER",O="PLUS",j="MINUS",E="MULT",w="DIV",g="LPARAN",x="RPARAN",V="EOF";function N(e,t){this.type=e,this.value=t}var A=function(){function e(t){Object(u.a)(this,e),this.text=t,this.pos=0,this.current_char=this.text[this.pos]}return Object(o.a)(e,[{key:"char_error",value:function(e){throw new Error(e)}},{key:"advance_pointer",value:function(){this.pos++,this.pos>this.text.length-1?this.current_char=null:this.current_char=this.text[this.pos]}},{key:"get_digit",value:function(){for(var e="";null!=this.current_char&&!isNaN(this.current_char);)e+=this.current_char,this.advance_pointer();return parseInt(e)}},{key:"skip_whitespace",value:function(){for(;null!=this.current_char&&" "===this.current_char;)this.advance_pointer()}},{key:"get_next_token",value:function(){for(;null!=this.current_char;)if(" "!==this.current_char){if(!isNaN(this.current_char))return new N(C,this.get_digit());if("+"===this.current_char){var e=new N(O,"+");return this.advance_pointer(),e}if("-"===this.current_char){var t=new N(j,"-");return this.advance_pointer(),t}if("\xd7"===this.current_char){var n=new N(E,"\xd7");return this.advance_pointer(),n}if("\xf7"===this.current_char){var r=new N(w,"\xf7");return this.advance_pointer(),r}if("("===this.current_char){var i=new N(g,"(");return this.advance_pointer(),i}if(")"===this.current_char){var a=new N(x,")");return this.advance_pointer(),a}this.char_error("Invalid character found")}else this.skip_whitespace();return new N(V,this.current_char)}}]),e}(),L=Object(o.a)((function e(t){Object(u.a)(this,e),this.token=t,this.value=t.value})),S=Object(o.a)((function e(t,n,r){Object(u.a)(this,e),this.left=t,this.op=n,this.right=r})),I=Object(o.a)((function e(t,n){Object(u.a)(this,e),this.op=t,this.expr=n})),D=function(){function e(t){Object(u.a)(this,e),this.lexer=t,this.current_token=this.lexer.get_next_token()}return Object(o.a)(e,[{key:"token_error",value:function(e){throw new Error(e)}},{key:"eat",value:function(e){this.current_token.type===e?this.current_token=this.lexer.get_next_token():this.token_error("Invalid token detected")}},{key:"factor",value:function(){var e=new N(this.current_token.type,this.current_token.value);if(e.type===O)return this.eat(O),new I(e,this.factor());if(e.type===j)return this.eat(j),new I(e,this.factor());if(e.type===C)return this.eat(C),new L(e);if(e.type===g){this.eat(g);var t=this.expr();return this.eat(x),t}}},{key:"term",value:function(){for(var e=this.factor();this.current_token.type===E||this.current_token.type===w;){var t=new N(this.current_token.type,this.current_token.value);t.type===E?this.eat(E):t.type===w&&this.eat(w),e=new S(e,t,this.factor())}return e}},{key:"expr",value:function(){for(var e=this.term();this.current_token.type===O||this.current_token.type===j;){var t=new N(this.current_token.type,this.current_token.value);t.type===O?this.eat(O):t.type===j&&this.eat(j),e=new S(e,t,this.term())}return e}},{key:"parse",value:function(){return this.expr()}}]),e}(),R=function(){function e(t){Object(u.a)(this,e),this.parser=t}return Object(o.a)(e,[{key:"interpret",value:function(){return this.nodeVisitor(this.parser.parse())}},{key:"nodeVisitor",value:function(e){var t="visit_".concat(e.constructor.name);if(this[t])return this[t](e);throw new Error("No method found for type ".concat(e.constructor.name))}},{key:"visit_BinaryOperator",value:function(e){return e.op.type===O?this.nodeVisitor(e.left)+this.nodeVisitor(e.right):e.op.type===j?this.nodeVisitor(e.left)-this.nodeVisitor(e.right):e.op.type===E?this.nodeVisitor(e.left)*this.nodeVisitor(e.right):e.op.type===w?this.nodeVisitor(e.left)/this.nodeVisitor(e.right):void 0}},{key:"visit_Number",value:function(e){return e.value}},{key:"visit_UnaryOperator",value:function(e){return e.op.type===O?this.nodeVisitor(e.expr):e.op.type===j?-1*this.nodeVisitor(e.expr):void 0}}]),e}();function U(e){var t=new A(e),n=new D(t);return new R(n).interpret()}var z=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={display:""},r.handleClick=r.handleClick.bind(Object(h.a)(r)),r}return Object(o.a)(n,[{key:"handleClick",value:function(e){"="!==e?"AC"===e?this.setState({display:""}):this.setState((function(t){return{display:t.display+e.toString()}})):this.setState({display:U(this.state.display)})}},{key:"render",value:function(){return i.a.createElement("div",{style:F},i.a.createElement(f,{value:this.state.display}),i.a.createElement("div",{style:P},i.a.createElement("div",{style:B},i.a.createElement(_,{handleClick:this.handleClick}),i.a.createElement(m,{handleClick:this.handleClick})),i.a.createElement(b,{handleClick:this.handleClick})))}}]),n}(i.a.Component),P={display:"flex",flexDirection:"row"},B={display:"flex",flexDirection:"column"},F={width:200},J=z,M=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{style:T},i.a.createElement("h1",null,"Calculator"),i.a.createElement(J,null))}}]),n}(i.a.Component),T={display:"flex",flexDirection:"column",alignItems:"center",fontFamily:"Arial",fontSize:20},G=M;c.a.render(i.a.createElement(G,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.b6dc4493.chunk.js.map
function Hrc(){}
function Frc(){Wmb(this,Jrc(new Krc))}
function wrc(a,b,c){Cmb.call(this,a,b,c,(Q0b(),P0b))}
function Xrc(a){var b;if(!a.g){b=new Frc(new Hrc);a.g=b}return a.g}
function Lrc(a){var b;b=new ttb;Io(b.a,DJc);ntb(b,f0(a));Io(b.a,EJc);return new M_(b.a.a)}
function Mrc(a){var b;b=new ttb;Io(b.a,DJc);ntb(b,f0(a));Io(b.a,EJc);return new M_(b.a.a)}
function Nrc(a){var b;b=new ttb;Io(b.a,DJc);ntb(b,f0(a));Io(b.a,EJc);return new M_(b.a.a)}
function Orc(a){var b;b=new ttb;Io(b.a,DJc);ntb(b,f0(a));Io(b.a,EJc);return new M_(b.a.a)}
function Wrc(a){var b;if(!a.f){b=new wrc(Llb(hnb(a.a)),Xrc(a),Vrc(a));bmb((inb(a.a),b),tnb(inb(a.a)));a.f=b}return a.f}
function Krc(){this.a=Hr($doc);this.c=Hr($doc);this.e=Hr($doc);this.g=Hr($doc);this.b=new K1(this.a);this.d=new K1(this.c);this.f=new K1(this.e);this.i=new K1(this.g)}
function Jrc(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N,O,P,Q;b=new _Hb;JAb(b,(c=new wDb(wJc),JAb(c,(d=new MGb,d.a='Project Setup',LGb(d),d.b='basic setup and using custom themes',LGb(d),d)),JAb(c,(e=new cHb,JAb(e,(j=new oHb(Lrc(a.a).a),k=M1((xab(),j.cb)),J1(a.b),k.b?Fq(k.b,k.a,k.c):P1(k.a),nHb(j,(n=new tEb(3),n.b=xJc,rEb(n),n),J1(a.b)),j)),JAb(e,(o=new fHb,JAb(o,new hFb((p=new ttb,Io(p.a,'For the basic setup just inherit the basic GwtBootstrap3 module into your *.gwt.xml.'),new M_(p.a.a)).a)),JAb(o,(q=new Yxc,SHb(q,(r=new ttb,Io(r.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3"/&gt;\\n &lt;/module&gt;\\n'),new M_(r.a.a)).a),n2(q.cb,AJc,true),q)),o)),e)),JAb(c,(f=new cHb,JAb(f,(s=new oHb(Nrc(a.c).a),t=M1(s.cb),J1(a.d),t.b?Fq(t.b,t.a,t.c):P1(t.a),nHb(s,(u=new tEb(3),u.b='Bootstrap2 Look-a-like Setup',rEb(u),u),J1(a.d)),s)),JAb(f,(v=new fHb,JAb(v,new hFb((w=new ttb,Io(w.a,'For the setup with a Bootstrap2 look-a-like theme inherit the GwtBootstrap3Theme into your *.gwt.xml.'),new M_(w.a.a)).a)),JAb(v,(A=new Yxc,SHb(A,(B=new ttb,Io(B.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3Theme"/&gt;\\n &lt;/module&gt;\\n'),new M_(B.a.a)).a),n2(A.cb,AJc,true),A)),v)),f)),JAb(c,(g=new cHb,JAb(g,(C=new oHb(Orc(a.e).a),D=M1(C.cb),J1(a.f),D.b?Fq(D.b,D.a,D.c):P1(D.a),nHb(C,(F=new tEb(3),F.b='Custom Theme',rEb(F),F),J1(a.f)),C)),JAb(g,(G=new fHb,JAb(G,new hFb((H=new ttb,Io(H.a,'1. For the setup with a custom theme inherit the GwtBootstrap3 your *.gwt.xml. <br> 2. Next, download the theme that you wish to use. <br> 3. Then, place the CSS/JS files from the theme either in your public folder or a resource folder. <br> 4. If you use a resource folder, link the resource folder as public path in your *.gwt.xml. <br> 5. Link the CSS/JS files into your *.gwt.xml AFTER the GwtBootstrap3 inherit. <br> <br> ** Since your CSS files are linked last onto the page they will be the priority stylesheet and take priority over the others, giving you the custom theme.'),new M_(H.a.a)).a)),JAb(G,(I=new Yxc,SHb(I,(J=new ttb,Io(J.a,"&lt;module&gt;\\n \\s\\s&lt;inherits name=\"org.gwtbootstrap3.GwtBootstrap3\"/&gt;\\n\\n \\s\\s&lt;public path='resource'&gt;\\n \\s\\s\\s\\s&lt;include name='css/*.css'/&gt;\\n \\s\\s\\s\\s&lt;include name='js/*.js'/&gt;\\n \\s\\s&lt;/public&gt;\\n\\n \\s\\s&lt;stylesheet src='css/theme.css'/&gt;\\n \\s\\s&lt;script src='js/theme.js'/&gt;\\n &lt;/module&gt;\\n"),new M_(J.a.a)).a),n2(I.cb,AJc,true),I)),G)),g)),JAb(c,(i=new cHb,JAb(i,(K=new oHb(Mrc(a.g).a),L=M1(K.cb),J1(a.i),L.b?Fq(L.b,L.a,L.c):P1(L.a),nHb(K,(M=new tEb(3),M.b='Support for IE8',rEb(M),M),J1(a.i)),K)),JAb(i,(N=new fHb,JAb(N,new hFb((O=new ttb,Io(O.a,'For support for IE8 you need to inherit the Respond module into your *.gwt.xml.'),new M_(O.a.a)).a)),JAb(N,(P=new Yxc,SHb(P,(Q=new ttb,Io(Q.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.extras.respond.Respond"/&gt;\\n &lt;/module&gt;\\n'),new M_(Q.a.a)).a),n2(P.cb,AJc,true),P)),N)),i)),c));return b}
C$(1313,535,PDc,wrc);C$(1316,540,QDc,Frc);C$(1317,1,{},Hrc);C$(1318,1,{},Krc);C$(1324,1,pEc);_.Ab=function lsc(){Mob(this.b,Wrc(this.a.a))};var VV=Grb(SIc,'SetupPresenter',1313),YV=Grb(SIc,'SetupView',1316),XV=Grb(SIc,'SetupView_BinderImpl',1317),WV=Grb(SIc,'SetupView_BinderImpl$Widgets',1318);wEc(dn)(37);
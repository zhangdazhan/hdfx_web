/**
 * 串子计算器 v3 - 纯前端本地计算 + HG 下注/中奖金额
 * 从 bauch_calc/sne_pure.py sne_compute 逐段直译, 追加 HG 中间变量
 */

(function (global) {
  'use strict';

  var CFG = {
    胜负串胜负:["D6","D7",["W5"],["Y5"]], 胜负串赢半:["J8","J7",["W5"],["Y6","Y7"]],
    胜负串输半:["J17","J16",["W5"],["Y6","Y8"]], 胜负串平手:["J25","J26",["W5"],["Y6","Y9"]],
    赢半串胜负:["D15","D16",["W6","W7"],["Y5"]], 赢半串赢半:["J35","J36",["W6","W7"],["Y6","Y7"]],
    赢半串输半:["P9","P8",["W6","W7"],["Y6","Y8"]], 赢半串平手:["P18","P19",["W6","W7"],["Y6","Y9"]],
    输半串胜负:["D24","D25",["W6","W8"],["Y5"]], 输半串赢半:["P28","P29",["W6","W8"],["Y6","Y7"]],
    输半串输半:["P38","P39",["W6","W8"],["Y6","Y8"]], 输半串平手:["V19","V18",["W6","W8"],["Y6","Y9"]],
    平手串胜负:["D33","D34",["W6","W9"],["Y5"]], 平手串赢半:["V29","V28",["W6","W9"],["Y6","Y7"]],
    平手串输半:["V38","V39",["W6","W9"],["Y6","Y8"]], 平手串平手:["AB39","AB38",["W6","W9"],["Y6","Y9"]],
  };

  function m2t(m) {
    var p=(m||'').substring(0,2);
    if(p==='WL'&&(m||'').length===2)return'胜负';
    if(p==='WL')return'平手';
    if(p==='WH')return'赢半';
    if(p==='LH')return'输半';
    if((m||'').charAt(0)==='D')return'平手';
    return'胜负';
  }

  // 根据 HG 赔率数量调整串法: 如果某边有 2 个 HG 赔率但公式只用 1 个, 换类型
  function bestChuan(m1, m2, ho1, ho2) {
    var t1=m2t(m1), t2=m2t(m2);
    // 如果两边都是 2 HG 赔率且当前 平手串平手(只用Y6), 改用 赢半串赢半(全用)
    if (ho1.length>=2 && ho2.length>=2 && t1==='平手' && t2==='平手') {
      // 平手串平手 公式不用Y9(b), 改用 赢半串赢半 或 输半串输半 (全用2+2)
      t1='输半'; t2='输半';
    }
    return t1+'串'+t2;
  }

  var SM={W5:0,W6:1,W7:2,W8:3,W9:4,Y5:0,Y6:1,Y7:2,Y8:3,Y9:4};
  function ex(sl,od){var w=[1,1,1,1,1];for(var i=0;i<Math.min(sl.length,od.length);i++)w[SM[sl[i]]]=od[i];return w;}

  // 每个函数返回 {p:[profit1,profit2], hi1:[], hi2:[]} 
  // hi1/hi2 = HG input amounts (正数=下注额) for one/tow legs

  function s1(n,i,r,o,a,l,s,u,c,d,h,A,f,p,v,g,m,y,b){
    var B4=d,B2=u,B5=v,C2=s,B3=c;
    var C4=-B2*B3*C2*l*(1-B5*(1+o)+o)/((2*i-B4*(1+i))*(1-B5*(1+o)+o)-(o-1)*(B4*(1+i)-2*i));
    var C5=B2*B3*C2*l*(B4*(1+i)-2*i)/((2*i-B4*(1+i))*(1-B5*(1+o)+o)-(o-1)*(B4*(1+i)-2*i));
    var E4=B4*C4+C2*n+(B4-1)*C4*i,B6=C2+C4;
    var E2=B2*B3*C2*l+C2*n+C4*i+C5*o,B7=C2+C4+C5;
    return {p:[E4-B6,E2-B7],hi1:[Math.abs(C4)],hi2:[Math.abs(C5)]};
  }
  function s2(n,i,r,o,a,l,s,u,c,d,h,A,f,p,v,g,m,y,b){
    var H4=d,H5=g,H6=m,I2=s,H3=c,H2=u;
    var I6=H2*H3*I2*l/((2*a-H5*(1+a))*(.5-.5*H6-.5*(H6-1)*o)/(H5+a*(H5-2))-(o-.5*(1+H6)-.5*(H6-1)*o));
    var I5=-(.5-.5*H6-.5*(H6-1)*o)/(H5+a*(H5-2))*I6;
    var I4=(H2*H3*I2*l+I5*a+I6*o-I5-I6)/(H4*(1+i)-2*i);
    var H8=I2+I4+I5+I6,H7=I2+I4;
    var K6=H6*I6+I2*n+I4*i+I5*a+(H6-1)*I6*o;
    var K4=H4*I4+I2*n+(H4-1)*I4*i;
    return {p:[K6-H8,K4-H7],hi1:[Math.abs(I4)],hi2:[Math.abs(I5),Math.abs(I6)]};
  }
  function s3(n,i,r,o,a,l,s,u,c,d,h,A,f,p,v,g,m,y,b){
    var N6=g,O2=s,N7=y,N3=c,N5=A,N4=h,N2=u;
    var dn=(a*(2-N6)-N6)*(.5+1.5*o-N7*(1+o))-.5*(N6+a*(N6-2))*(o-1);
    var O7=(N6+a*(N6-2))*N2*N3*O2*l/dn;
    var O6=-(.5+1.5*o-N7*(1+o))*N2*N3*O2*l/dn;
    var dO5=N5+(N5-2)*i,O5=(N2*N3*O2*l-(O6*(1-a)+O7*(1-o)))/(dO5?dO5:1e-6);
    var dO4=N4+r*(N4-2),O4=-.5*O5*(1-N5)*(1+i)/(dO4?dO4:1e-6);
    var Q7=N7*O7+O2*n+O4*r+O5*i+O6*a+(N7-1)*O7*o;
    var Q4=N4*O4+.5*O5+N5*O5*.5+O2*n+(N4-1)*O4*r+.5*(N5-1)*O5*i;
    var N9=O2+O4+O6+O7+O5,N8=O2+O4+O5;
    return {p:[Q7-N9,Q4-N8],hi1:[Math.abs(O4),Math.abs(O5)],hi2:[Math.abs(O6),Math.abs(O7)]};
  }
  function s4(n,i,r,o,a,l,s,u,c,d,h,A,f,p,v,g,m,y,b){
    var B14=v,B10=u,B11=c,B13=A,C10=s,B12=h;
    var C14=B10*B11*C10*l/(B14+o*(B14-2));
    var C13=B10*B11*C10*l*(1+o)*(B14-1)/((B14+o*(B14-2))*(B13+i*(B13-2)));
    var C12=-.5*B10*B11*C10*l*(1+o)*(B14-1)*(1-B13)*(1+i)/((B14+o*(B14-2))*(B13+i*(B13-2))*(B12+r*(B12-2)));
    var E14=B14*C14+C10*n+C12*r+C13*i+(B14-1)*C14*o,B15=C10+C12+C13;
    var E12=B12*C12+.5*C13+B13*C13*.5+C10*n+(B12-1)*C12*r+(B13-1)*C13*.5*i,B16=C10+C12+C13+C14;
    return {p:[E12-B15,E14-B16],hi1:[Math.abs(C12),Math.abs(C13)],hi2:[Math.abs(C14)]};
  }
  function s5(n,i,r,o,a,l,s,u,c,d,h,A,f,p,v,g,m,y,b){
    var H14=g,H12=c,I11=s,H11=u,H15=y,H13=d;
    var dI=(a*(2-H14)-H14)*(.5+1.5*o-H15*(1+o))-.5*(o-1)*(H14+a*(H14-2));
    var I14=-H11*H12*I11*l*(.5+1.5*o-H15*(1+o))/dI;
    var I15=H11*H12*I11*l*(H14+a*(H14-2))/dI;
    var I13=H11*H12*I11*l*((a-1)*(.5+1.5*o-H15*(1+o))-(H15+(H15-1)*o-1)*(H14+a*(H14-2)))/(dI*(2*i-H13*(1+i)));
    var H16=I11+I13,K15=H15*I15+I11*n+I13*i+I14*a+(H15-1)*I15*o,H17=I11+I13+I14+I15;
    var K13=H13*I13+I11*n+(H13-1)*I13*i;
    return {p:[K15-H17,K13-H16],hi1:[Math.abs(I13)],hi2:[Math.abs(I14),Math.abs(I15)]};
  }
  function s6(n,i,r,o,a,l,s,u,c,d,h,A,f,p,v,g,m,y,b){
    var N15=A,N17=b,O12=s,N13=c,N16=g,N14=h,N12=u;
    var d2=(o-1)*(N16+a*(N16-2))-(2*a-N16*(1+a))*(1-N17-(N17-1)*o);
    var k=1-((1-N17-(N17-1)*o)*(1-a)-(N16+a*(N16-2))*(1-o))/d2;
    var O14=-.5*(1-N15)*(1+i)/(N14+r*(N14-2))*(N12*N13*O12*l*k/(N15+i*(N15-2)));
    var O17=-N12*N13*O12*l*(N16+a*(N16-2))/d2,O16=N12*N13*O12*l*(1-N17-(N17-1)*o)/d2;
    var O15=N12*N13*O12*l*k/(N15+i*(N15-2));
    var Q17=N17*O17+O12*n+O14*r+O15*i+O16*a+(N17-1)*O17*o,N18=O12+O14+O15;
    var Q14=N14*O14+.5*O15+N15*O15*.5+O12*n+(N14-1)*O14*r+.5*(N15-1)*O15*i,N19=O12+O14+O16+O17+O15;
    return {p:[Q14-N18,Q17-N19],hi1:[Math.abs(O14),Math.abs(O15)],hi2:[Math.abs(O16),Math.abs(O17)]};
  }
  function s7(n,i,r,o,a,l,s,u,c,d,h,A,f,p,v,g,m,y,b){
    var U12=s,T17=b,T13=c,T15=f,T16=g,T14=h,T12=u;
    var U16=-(1+o)*(1-T17)*T12*T13*U12*l/((T16*(1+a)-2*a)*(T17*(1+o)-2*o));
    var U17=T12*T13*U12*l/(T17*(1+o)-2*o);
    var U14=-(.5+1.5*i-T15*(1+i))*(T12*T13*U12*l+U16*a+U17*o-U16-U17)/((T15*(1+i)-2*i)*(T14*(1+r)-2*r));
    var U15=(T12*T13*U12*l+U16*a+U17*o-U16-U17)/(T15*(1+i)-2*i);
    var T19=U12+U14+U16+U17+U15,W17=T17*U17+U12*n+U14*r+U15*i+U16*a+(T17-1)*U17*o;
    var W14=T14*U14+.5*U15+U12*n+(T14-1)*U14*r+.5*U15*i,T18=U12+U14+U15;
    return {p:[W17-T19,W14-T18],hi1:[Math.abs(U14),Math.abs(U15)],hi2:[Math.abs(U16),Math.abs(U17)]};
  }
  function s8(n,i,r,o,a,l,s,u,c,d,h,A,f,p,v,g,m,y,b){
    var B23=v,B20=c,B19=u,C19=s,B22=f,B21=h;
    var C23=B19*B20*C19*l/(B23+o*(B23-2));
    var C22=B19*B20*C19*l*(B23-1)*(1+o)/((B23+o*(B23-2))*(B22+i*(B22-2)));
    var C21=-C22*(.5-B22+i*(1.5-B22))/(B21+r*(B21-2));
    var E21=B21*C21+.5*C22+C19*n+(B21-1)*C21*r+.5*C22*i,B24=C19+C21+C22;
    var E23=B23*C23+C19*n+C21*r+C22*i+(B23-1)*C23*o,B25=C19+C21+C22+C23;
    return {p:[E21-B24,E23-B25],hi1:[Math.abs(C21),Math.abs(C22)],hi2:[Math.abs(C23)]};
  }
  function s9(n,i,r,o,a,l,s,u,c,d,h,A,f,p,v,g,m,y,b){
    var H20=u,H23=g,I20=s,H21=c,H22=d,H24=b;
    var I23=H20*H21*I20*l*(H24-1)*(1+o)/((H23-a*(2-H23))*(H24*(1+o)-2*o));
    var I24=H20*H21*I20*l/(H24*(1+o)-2*o);
    var I22=(H20*H21*I20*l+I23*a+I24*o-I23-I24)/(H22+(H22-1)*i-i);
    var K22=H22*I22+I20*n+(H22-1)*I22*i,H25=I20+I22;
    var H26=I20+I22+I23+I24,K24=H24*I24+I20*n+I22*i+I24*(H24-1)*o+I23*a;
    return {p:[K22-H25,K24-H26],hi1:[Math.abs(I22)],hi2:[Math.abs(I23),Math.abs(I24)]};
  }
  function s10(n,i,r,o,a,l,s,u,c,d,h,A,f,p,v,g,m,y,b){
    var N25=f,N23=c,N22=u,N27=m,O22=s,N26=g,N24=h;
    var dO27=-.5*(1-N27-(N27-1)*o)/(N26+a*(N26-2))*(a*(2-N26)-N26)+o*(1.5-.5*N27)-.5*(1+N27);
    var O27=-N22*N23*O22*l/dO27;
    var tmp=N22*N23*O22*l+-.5*(1-N27-(N27-1)*o)/(N26+a*(N26-2))*O27*(a-1)+O27*(o-1);
    var O24=tmp/(N25+i*(N25-2))*(N25-.5+i*(N25-1.5))/(N24+(N24-2)*r);
    var O25=tmp/(N25+i*(N25-2));
    var O26=-.5*(1-N27-(N27-1)*o)/(N26+a*(N26-2))*O27;
    var Q24=N24*O24+.5*O25+O22*n+(N24-1)*O24*r+.5*O25*i,N28=O22+O24+O25;
    var Q27=N27*O27+O22*n+O24*r+O25*i+O26*a+(N27-1)*O27*o,N29=O22+O24+O26+O27+O25;
    return {p:[Q24-N28,Q27-N29],hi1:[Math.abs(O24),Math.abs(O25)],hi2:[Math.abs(O26),Math.abs(O27)]};
  }
  function s11(n,i,r,o,a,l,s,u,c,d,h,A,f,p,v,g,m,y,b){
    var T24=h,U22=s,T26=g,T23=c,T22=u,T27=m,T25=p;
    var dn=(2*a-T26*(1+a))*(.5*(1-T27)*(1+o))-(T26+a*(T26-2))*(1.5*o-.5*o*T27-.5*(1+T27));
    var U26=-T22*T23*U22*l*.5*(1-T27)*(1+o)/dn;
    var U27=T22*T23*U22*l*(T26+a*(T26-2))/dn;
    var U25=-(T22*T23*U22*l+U26*(a-1)+U27*(o-1))/(-(1-T25)*(1+i)/(T24+r*(T24-2))*(2*r-T24*(r+1))+(i-1));
    var U24=-(1-T25)*(1+i)/(T24+r*(T24-2))*U25;
    var W24=T24*U24+U25+U22*n+(T24-1)*U24*r;
    var W27=T27*U27+U22*n+U24*r+U25*i+U26*a+(T27-1)*U27*o,T29=U22+U24+U26+U27+U25,T28=U22+U24+U25;
    return {p:[W27-T29,W24-T28],hi1:[Math.abs(U24),Math.abs(U25)],hi2:[Math.abs(U26),Math.abs(U27)]};
  }
  function s12(n,i,r,o,a,l,s,u,c,d,h,A,f,p,v,g,m,y,b){
    var B29=c,B30=h,C28=s,B32=v,B31=p,B28=u;
    var C32=B28*B29*C28*l/(B32+o*(B32-2));
    var C31=B28*B29*C28*l*(B32-1)*(1+i)/((B32+o*(B32-2))*(B31+i*(B31-2)));
    var C30=C31*(B31-1)*(1+i)/(B30+r*(B30-2));
    var B34=C28+C30+C31+C32,B33=C28+C30+C31,E30=B30*C30+C31+C28*n+(B30-1)*C30*r;
    var E32=B32*C32+C28*n+C30*r+C31*i+(B32-1)*C32*o;
    return {p:[E30-B33,E32-B34],hi1:[Math.abs(C30),Math.abs(C31)],hi2:[Math.abs(C32)]};
  }
  function s13(n,i,r,o,a,l,s,u,c,d,h,A,f,p,v,g,m,y,b){
    var H33=g,H29=u,H32=A,I29=s,H30=c,H34=m,H31=h;
    var I33=.5*(H34-1)*(1+o)*H29*H30*I29*l/((H34-o*(2-H34))*(H33+a*(H33-2)));
    var I34=H29*H30*I29*l/(H34-o*(2-H34));
    var I32=(H29*H30*I29*l+I33*(a-1)+I34*(o-1))/(H32+i*(H32-2));
    var I31=.5*(H32-1)*(1+i)*I32/(H31+r*(H31-2));
    var H35=I29+I31+I32,K31=H31*I31+.5*I32+H32*I32*.5+I29*n+(H31-1)*I31*r+.5*(H32-1)*I32*i;
    var H36=I29+I31+I33+I34+I32,K34=H34*I34+I29*n+I31*r+I32*i+I33*a+(H34-1)*I34*o;
    return {p:[K31-H35,K34-H36],hi1:[Math.abs(I31),Math.abs(I32)],hi2:[Math.abs(I33),Math.abs(I34)]};
  }
  function s14(n,i,r,o,a,l,s,u,c,d,h,A,f,p,v,g,m,y,b){
    var N36=g,N34=h,N32=u,N37=y,O32=s,N35=f,N33=c;
    var dn=(a*(2-N36)-N36)*(.5+.5*o-N37-(N37-1)*o)-.5*(o-1)*(N36+a*(N36-2));
    var O37=N32*N33*O32*(N36+a*(N36-2))/dn,O36=-N32*N33*O32*(.5+.5*o-N37-(N37-1)*o)/dn;
    var tmp=N32*N33*O32-N32*N33*O32*(.5+.5*o-N37-(N37-1)*o)/dn*(a-1)+N32*N33*O32*(N36+a*(N36-2))/dn*(o-1);
    var O35=-tmp*(N34+r*(N34-2))/(-(.5+1.5*i-N35*(1+i))*(r*(2-N34)-N34)+.5*(i-1)*(N34+r*(N34-2)));
    var O34=-O35*(.5+1.5*i-N35*(1+i))/(N34+r*(N34-2));
    var N38=O32+O34+O35,N39=O32+O34+O36+O37+O35;
    var Q34=N34*O34+.5*O35+O32*n+(N34-1)*O34*r+.5*O35*i;
    var Q37=N37*O37+O32*n+O34*r+O35*i+O36*a+(N37-1)*O37*o;
    return {p:[Q34-N38,Q37-N39],hi1:[Math.abs(O34),Math.abs(O35)],hi2:[Math.abs(O36),Math.abs(O37)]};
  }
  function s15(n,i,r,o,a,l,s,u,c,d,h,A,f,p,v,g,m,y,b){
    var T33=c,T34=h,T35=p,T32=u,T37=y,U32=s,T36=g;
    var U37=T32*T33*U32*l/(T37*(1+o)-2*o);
    var d2=(T36+a*(T36-2))*(T37*(1+o)-2*o);
    var tmp=-T32*T33*U32*l-(T37*(1+o)-.5-1.5*o)*T32*T33*U32*l/d2*(a-1)-T32*T33*U32*l/(T37*(1+o)-2*o)*(o-1);
    var U34=tmp*(1-T35-(T35-1)*i)/((2*r-T34*(1+r))*(1-T35-(T35-1)*i)-(T34+r*(T34-2))*(i-1));
    var U36=(T37*(1+o)-.5-1.5*o)*T32*T33*U32*l/d2;
    var U35=-(T34+r*(T34-2))*tmp/((2*r-T34*(1+r))*(1-T35-(T35-1)*i)-(T34+r*(T34-2))*(i-1));
    var T38=U32+U34+U35,T39=U32+U34+U36+U37+U35;
    var W34=T34*U34+U35+U32*n+(T34-1)*U34*r,W37=T37*U37+U32*n+U34*r+U35*i+U36*a+(T37-1)*U37*o;
    return {p:[W34-T38,W37-T39],hi1:[Math.abs(U34),Math.abs(U35)],hi2:[Math.abs(U36),Math.abs(U37)]};
  }
  function s16(n,i,r,o,a,l,s,u,c,d,h,A,f,p,v,g,m,y,b){
    var Z32=u,Z37=b,Z35=p,Z33=c,AA32=s,Z36=g,Z34=h;
    var AA37=Z32*Z33*AA32*l/(Z37+o*(Z37-2));
    var AA36=Z32*Z33*AA32*l/(Z37+o*(Z37-2))*((Z37-1)*(1+o))/(Z36+a*(Z36-2));
    var tmp=Z32*Z33*AA32*l+Z32*Z33*AA32*l/(Z37+o*(Z37-2))*((Z37-1)*(1+o))/(Z36+a*(Z36-2))*(a-1)+Z32*Z33*AA32*l/(Z37+o*(Z37-2))*(o-1);
    var dn=(Z35-1)*(1+i)*(r*(2-Z34)-Z34)/(Z34+r*(Z34-2))+(i-1);
    var AA35=-tmp/dn,AA34=-tmp/dn*(Z35-1)*(1+i)/(Z34+r*(Z34-2));
    var Z39=AA32+AA34+AA36+AA37+AA35,Z38=AA32+AA34+AA35;
    var AC37=Z37*AA37+AA32*n+AA34*r+AA35*i+AA36*a+(Z37-1)*AA37*o;
    var AC34=Z34*AA34+AA35+AA32*n+(Z34-1)*AA34*r;
    return {p:[AC37-Z39,AC34-Z38],hi1:[Math.abs(AA34),Math.abs(AA35)],hi2:[Math.abs(AA36),Math.abs(AA37)]};
  }

  var FN={胜负串胜负:s1,胜负串赢半:s2,胜负串输半:s5,胜负串平手:s9,赢半串胜负:s4,赢半串赢半:s13,赢半串输半:s3,赢半串平手:s6,输半串胜负:s8,输半串赢半:s10,输半串输半:s14,输半串平手:s7,平手串胜负:s12,平手串赢半:s11,平手串输半:s15,平手串平手:s16};

  var _prevMap={},_callCount=0;

  function compute(opts){
    _callCount++;
    var ident=JSON.stringify({method1:opts.method1,method2:opts.method2,jr:opts.jcRebate,hr:opts.hgRebate,ji:opts.jcInput,jo1:opts.jcOdds1,jo2:opts.jcOdds2,ho1:opts.hgOdds1});
    var curHg2=JSON.stringify(opts.hgOdds2||[]);
    var prev=_prevMap[ident];
    var status2=prev!==void 0&&prev.hgOdds2!==curHg2;
    var ifAvgTrue=opts.ifAverg===true;
    var frozenHg1=(status2&&opts.ifAverg===false)?prev:null;
    
    var logParams=JSON.parse(JSON.stringify(opts));
    logParams.status2=status2;
    logParams._call=_callCount;
    
    var ho1=opts.hgOdds1||[], ho2=opts.hgOdds2||[];
    var chuan=bestChuan(opts.method1, opts.method2, ho1, ho2);
    var cfg=CFG[chuan],fn=FN[chuan];
    if(!cfg||!fn){var errRet={success:!1,error:'不支持的串法: '+chuan};return errRet;}
    var w=ex(cfg[2],opts.hgOdds1||[]),y=ex(cfg[3],opts.hgOdds2||[]);
    var jcr=opts.jcRebate,hgr=opts.hgRebate;
    var r=fn(jcr,hgr,hgr,hgr,hgr,(opts.cite||1),opts.jcInput,opts.jcOdds1,opts.jcOdds2,w[0],w[1],w[2],w[3],w[4],y[0],y[1],y[2],y[3],y[4]);
    if(!r||!r.p||isNaN(r.p[0])){var errRet={success:!1,error:'sne计算失败'};return errRet;}

      // 收益调节: ifAverg===false 且 yield 是有效数字时, 用户指定 HgProfit1 = yield × jcInput
      // 仅缩放第一条腿的 HG 投注额 (hi1), 第二条腿 (hi2) 完全不动
      // p[1] 联动公式: p[1]' = p[1] - (k-1) * Σhi1 * (1-hgRebate)
      // baseYield<=0 (sne 解无利润/亏损) 时 k=1, 仅重算 p[0] (允许两路不平衡)
      // k 限制在 [0.01, 10] 防呆, 避免极端值
      var userYield=null;
      if(opts.ifAverg===false && opts.yield!==void 0 && opts.yield!==null && opts.yield!=='Sin'){
        var y=parseFloat(opts.yield);
        if(isFinite(y)&&y>=0) userYield=y;
      }
      if(userYield!==null){
        var baseYield=opts.jcInput>0?r.p[0]/opts.jcInput:0;
        var k=(baseYield>1e-9)?(1+(userYield-baseYield)/(1-opts.hgRebate)):1;
        if(k<0.01)k=0.01;
        if(k>10)k=10;
        var hi1OldTotal=(r.hi1||[]).reduce(function(s,v){return s+Math.abs(v);},0);
        r.p[0]=userYield*opts.jcInput;
        r.p[1]=r.p[1]-(k-1)*hi1OldTotal*(1-opts.hgRebate);
        if(r.hi1){r.hi1=r.hi1.map(function(v){return v*k;});}
      }

    var h1o=opts.hgOdds1||[],h2o=opts.hgOdds2||[];
    function amt(inp,odd){var x=Math.abs(inp||0);return x>0&&odd>0?x*odd:0;}
    var hi1=r.hi1||[],hi2=r.hi2||[];
    var ha1_1=hi1.length>0?amt(hi1[0],h1o[0]):0,ha1_2=hi1.length>1?amt(hi1[1],h1o[1]||h1o[0]):0;
    var ha2_1=hi2.length>0?amt(hi2[0],h2o[0]):0,ha2_2=hi2.length>1?amt(hi2[1],h2o[1]||h2o[0]):0;
    var jcAmt=opts.jcInput*opts.jcOdds1*opts.jcOdds2;
    var htz1_1=hi1.length>0?Math.abs(hi1[0]).toFixed(4):'0',htz1_2=hi1.length>1?Math.abs(hi1[1]).toFixed(4):'0';
    var htz2_1=hi2.length>0?Math.abs(hi2[0]).toFixed(4):'0',htz2_2=hi2.length>1?Math.abs(hi2[1]).toFixed(4):'0';
    if(frozenHg1){
      htz1_1=frozenHg1.hg1tz1;htz1_2=frozenHg1.hg1tz2;
      ha1_1=frozenHg1.hg1aj1;ha1_2=frozenHg1.hg1aj2;
      r.p[0]=frozenHg1.hg1pf;
    }
    _prevMap[ident]={hgOdds2:curHg2,hg1tz1:htz1_1,hg1tz2:htz1_2,hg1aj1:ha1_1,hg1aj2:ha1_2,hg1pf:r.p[0]};
    if(opts.ifAverg===false&&status2===true){
      var hg1Bet=parseFloat(htz1_1)+parseFloat(htz1_2);
      var hg2Bet=parseFloat(htz2_1)+parseFloat(htz2_2);
      r.p[1]=jcAmt+opts.jcInput*opts.jcRebate+hg1Bet*opts.hgRebate+hg2Bet*opts.hgRebate-opts.jcInput-hg1Bet-hg2Bet;
    }
    var result={success:!0,chuanName:chuan,profit1:r.p[0],profit2:r.p[1],
      JcProfit:r.p[1].toFixed(4),HgProfit1:r.p[0].toFixed(4),HgProfit2:r.p[1].toFixed(4),
      JCAmount:jcAmt.toFixed(4),JcProfitRate:(r.p[1]/opts.jcInput*100).toFixed(4)+'%',
      JCTzAmt:opts.jcInput.toString(),
      HGAmount1_1:ha1_1.toFixed(4),HGAmount1_2:ha1_2.toFixed(4),
      HGAmount2_1:ha2_1.toFixed(4),HGAmount2_2:ha2_2.toFixed(4),
      HGTzAmt1_1:htz1_1,HGTzAmt1_2:htz1_2,HGTzAmt2_1:htz2_1,HGTzAmt2_2:htz2_2,
      yield:opts.yield||'Sin',ifAverg:opts.ifAverg!==!1,status2:status2};
    var reqParams=JSON.parse(JSON.stringify(opts));
    reqParams.HG第一场赔率1=h1o[0]||0;
    reqParams.HG第一场赔率2=h1o[1]||0;
    reqParams.HG第一场投注金额1=htz1_1;
    reqParams.HG第一场投注金额2=htz1_2;
    reqParams.HG第一场中奖金额1=ha1_1.toFixed(4);
    reqParams.HG第一场中奖金额2=ha1_2.toFixed(4);
    reqParams.HG第一场利润=r.p[0].toFixed(4);
    reqParams.HG第二场赔率1=h2o[0]||0;
    reqParams.HG第二场赔率2=h2o[1]||0;
    reqParams.HG第二场投注金额1=htz2_1;
    reqParams.HG第二场投注金额2=htz2_2;
    reqParams.HG第二场中奖金额1=ha2_1.toFixed(4);
    reqParams.HG第二场中奖金额2=ha2_2.toFixed(4);
    reqParams.HG第二场利润=r.p[1].toFixed(4);
    reqParams.status2=status2;
    
    return result;
  }

  function test(){
    var t=[{label:'周五004x周一016 WLxLH2',m1:'WL',m2:'LH2',jo1:1.83,jo2:5.4,ho1:[2.05],ho2:[3.3,1.6],ex:'+'}];
    t.forEach(function(x){var r=compute({method1:x.m1,method2:x.m2,jcRebate:.2,hgRebate:.026,jcInput:5e3,jcOdds1:x.jo1,jcOdds2:x.jo2,hgOdds1:x.ho1,hgOdds2:x.ho2});console.log((r.profit1>=0?'+':'-')===x.ex?'✓':'✗',x.label,JSON.stringify({p:r.profit1.toFixed(2),jc:r.JCAmount,ha1_1:r.HGAmount1_1,ha2_1:r.HGAmount2_1,ha2_2:r.HGAmount2_2}));});}

  var ChuanCalc={compute:compute,test:test,m2t:m2t,CFG:CFG};
  if(typeof module!=='undefined'&&module.exports){module.exports=ChuanCalc;}else{global.ChuanCalc=ChuanCalc;}
})(typeof window!=='undefined'?window:this);

import { ENFV4Component } from './enf-v4/enf-v4.component';
import { PCFH190TLComponent } from './pcf-h190-tl/pcf-h190-tl.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'',children:[
    {path:'camera',loadComponent:()=>import('./camera/camera.component').then(m => m.CameraComponent)},//camera
    {path:'add-more',loadComponent:()=>import('./add-more-page/add-more-page.component').then(m => m.AddMorePageComponent)},
    {path:'GIF-Q150',loadComponent:()=>import('./gif-q150/gif-q150.component').then(m => m.GifQ150Component)},
    {path:'GIF-HQ190',loadComponent:()=>import('./gif-hq190/gif-hq190.component').then(m => m.GifHq190Component)},
    {path:'CF-HQ190L',loadComponent:()=>import('./cf-hq190l/cf-hq190l.component').then(m => m.CfHq190lComponent)},//22
    {path:'TJF-Q180V',loadComponent:()=>import('./tjf-q180v/tjf-q180v.component').then(m => m.TjfQ180vComponent)},
    {path:'BF-1T150',loadComponent:()=>import('./bf-1t150/bf-1t150.component').then(m => m.Bf1t150Component)},//alone 10 3ab
    {path:'3DV-190',loadComponent:()=>import('./demo-dv-loaner/demo-dv-loaner.component').then(m => m.DemoDvLoanerComponent)},//alone 5
    {path:'AR-T10E',loadComponent:()=>import('./ar-t10-e/ar-t10-e.component').then(m => m.ART10EComponent)},
    {path:'AR-T12E',loadComponent:()=>import('./ar-t12-e/ar-t12-e.component').then(m => m.ArT12EComponent)},
    {path:'BF-1T60',loadComponent:()=>import('./bf-1t60/bf-1t60.component').then(m => m.Bf1t60Component)},
    {path:'BF-1TH190',loadComponent:()=>import('./bf-1th190/bf-1th190.component').then(m => m.Bf1th190Component)},
    {path:'BF-1TH1100',loadComponent:()=>import('./bf-1th1100/bf-1th1100.component').then(m => m.Bf1th1100Component)},
    {path:'BF-1TQ170',loadComponent:()=>import('./bf-1tq170/bf-1tq170.component').then(m => m.Bf1tq170Component)},
    {path:'BF-1TQ180',loadComponent:()=>import('./bf-1tq180/bf-1tq180.component').then(m => m.Bf1tq180Component)},
    {path:'BF-3C40',loadComponent:()=>import('./bf-3c40/bf-3c40.component').then(m => m.Bf3C40Component)},//8 with diagram
    {path:'BF-3C160',loadComponent:()=>import('./bf-3c160/bf-3c160.component').then(m => m.Bf3C160Component)},
    {path:'BF-H190',loadComponent:()=>import('./bf-h190/bf-h190.component').then(m => m.BfH190Component)},
    {path:'BF-H1100',loadComponent:()=>import('./bf-h1100/bf-h1100.component').then(m => m.BfH1100Component)},
    {path:'BF-MP160F',loadComponent:()=>import('./bf-mp160f/bf-mp160f.component').then(m => m.BfMp160fComponent)},
    {path:'BF-MP190F',loadComponent:()=>import('./bf-mp190f/bf-mp190f.component').then(m => m.BfMp190fComponent)},//alone 9 with diagram
    {path:'BF-P150',loadComponent:()=>import('./bf-p150/bf-p150.component').then(m => m.BfP150Component)},
    {path:'BF-P160',loadComponent:()=>import('./bf-p160/bf-p160.component').then(m => m.BfP160Component)},
    {path:'BF-P190',loadComponent:()=>import('./bf-p190/bf-p190.component').then(m => m.BfP190Component)},
    {path:'BF-Q170',loadComponent:()=>import('./bf-q170/bf-q170.component').then(m => m.BfQ170Component)},
    {path:'BF-Q180',loadComponent:()=>import('./bf-q180/bf-q180.component').then(m => m.BfQ180Component)},
    {path:'BF-Q190',loadComponent:()=>import('./bf-q190/bf-q190.component').then(m => m.BfQ190Component)},
    {path:'BF-PE2',loadComponent:()=>import('./bf-pe2/bf-pe2.component').then(m => m.BfPE2Component)},
    {path:'BF-UC180F',loadComponent:()=>import('./bf-uc180f/bf-uc180f.component').then(m => m.BfUc180fComponent)},
    {path:'BF-UC190F',loadComponent:()=>import('./bf-uc190f/bf-uc190f.component').then(m => m.BfUc190fComponent)},
    {path:'BF-TE2',loadComponent:()=>import('./bf-te2/bf-te2.component').then(m => m.BfTE2Component)},
    {path:'BF-XP60',loadComponent:()=>import('./bf-xp60/bf-xp60.component').then(m => m.BfXP60Component)},
    {path:'BF-XP160F',loadComponent:()=>import('./bf-xp160f/bf-xp160f.component').then(m => m.BfXP160FComponent)},
    {path:'CF-EZ1500DL',loadComponent:()=>import('./cf-ez1500dl/cf-ez1500dl.component').then(m => m.CFEZ1500DLComponent)},
    {path:'CF-H170L',loadComponent:()=>import('./cf-h170l/cf-h170l.component').then(m => m.CfH170lComponent)},
    {path:'CF-H180AL',loadComponent:()=>import('./cf-h180al/cf-h180al.component').then(m => m.CfH180alComponent)},
    {path:'CF-H190L',loadComponent:()=>import('./cf-h190l/cf-h190l.component').then(m => m.CfH190lComponent)},
    {path:'GIF-HQ290',loadComponent:()=>import('./gif-hq290/gif-hq290.component').then(m => m.Gifhq290Component)},//page break
    {path:'CF-H290ECI',loadComponent:()=>import('./cf-h290eci/cf-h290eci.component').then(m => m.CfH290eciComponent)},//page break
    {path:'CF-HQ290L',loadComponent:()=>import('./cf-hq290l/cf-hq290l.component').then(m => m.CfHq290lComponent)},//single line fuction
    {path:'CF-HQ290ZL',loadComponent:()=>import('./cf-hq290zl/cf-hq290zl.component').then(m => m.CfHq290zlComponent)},
    {path:'CF-LV1L',loadComponent:()=>import('./cf-lv1l/cf-lv1l.component').then(m => m.CfLv1lComponent)},//15
    {path:'CF-Q150L',loadComponent:()=>import('./cf-q150l/cf-q150l.component').then(m => m.CfQ150lComponent)},//17
    {path:'CF-Q180AL',loadComponent:()=>import('./cf-q180al/cf-q180al.component').then(m => m.CfQ180alComponent)},//18
    {path:'CF-V70L',loadComponent:()=>import('./cf-v70l/cf-v70l.component').then(m => m.CfV70lComponent)},
    {path:'CHF-B290',loadComponent:()=>import('./chf-b290/chf-b290.component').then(m => m.ChfB290Component)},//6
    {path:'CHF-V2',loadComponent:()=>import('./chf-v2/chf-v2.component').then(m => m.Chfv2Component)},//9 ALONE 3ab ,4ab
    {path:'CLL-S700',loadComponent:()=>import('./cll-s700/cll-s700.component').then(m => m.CLLs700Component)},//2
    {path:'CV-150',loadComponent:()=>import('./cv-150/cv-150.component').then(m => m.Cv150Component)},//18 without a and b
    {path:'CYF-5A',loadComponent:()=>import('./cyf-5a/cyf-5a.component').then(m => m.Cyf5aComponent)},//7 with diagram
    {path:'CYF-V2',loadComponent:()=>import('./cyf-v2/cyf-v2.component').then(m => m.Cyfv2Component)},//7 ALONE
    {path:'CYF-VA2',loadComponent:()=>import('./cyf-va2/cyf-va2.component').then(m => m.Cyfva2Component)},//10 with 3a,b
    {path:'CYF-VH',loadComponent:()=>import('./cyf-vh/cyf-vh.component').then(m => m.CyfvhComponent)},//7 ALONE
//50
    {path:'ENF-GP',loadComponent:()=>import('./enf-gp/enf-gp.component').then(m => m.EnfgpComponent)},//4 with diagram
    {path:'ENF-GP2',loadComponent:()=>import('./enf-gp2/enf-gp2.component').then(m => m.Enfgp2Component)},//4 with diagram
    {path:'ENF-P4',loadComponent:()=>import('./enf-p4/enf-p4.component').then(m => m.Enfp4Component)},//4 with diagram
    {path:'ENF-T3',loadComponent:()=>import('./enf-t3/enf-t3.component').then(m => m.EnfT3Component)},//7 with diagram
    {path:'ENF-V3',loadComponent:()=>import('./enf-v3/enf-v3.component').then(m => m.EnfV3Component)},//6 alone
    {path:'ENF-VH',loadComponent:()=>import('./enf-vh/enf-vh.component').then(m => m.EnfVhComponent)},//6 alone
    {path:'ENF-VH2',loadComponent:()=>import('./enf-vh2/enf-vh2.component').then(m => m.EnfVh2Component)},//6 alone
    {path:'ENF-VQ',loadComponent:()=>import('./enf-vq/enf-vq.component').then(m => m.EnfVqComponent)},//6 alone
    {path:'ENF-VT2(PAL)',loadComponent:()=>import('./enf-vt2(pal)/enf-vt2(pal).component').then(m => m.Enfvt2palComponent)},//9 ALONE WITHOUT 4ab
    {path:'ENF-VT3',loadComponent:()=>import('./enf-vt3/enf-vt3.component').then(m => m.Enfvt3Component)},//9 ALONE WITH LIGHT SOURCE , VIDEOCABLE
    {path:'ENF-XP',loadComponent:()=>import('./enf-xp/enf-xp.component').then(m => m.EnfxpComponent)},//5 alone
    //61
    //corrected
    {path:'GF-1TH190',loadComponent:()=>import('./gf-1th190/gf-1th190.component').then(m => m.Gf1th190Component)},//16 alone
    {path:'EU-ME1',loadComponent:()=>import('./eu-me1/eu-me1.component').then(m => m.Eume1Component)},//new format 12 alone
    {path:'GF-UCT140-AL5',loadComponent:()=>import('./gc-uct140-al5/gc-uct140-al5.component').then(m => m.GcUCT140AL5Component)},//new format 20 alone
    {path:'GF-UCT180',loadComponent:()=>import('./gf-uct180/gf-uct180.component').then(m => m.Gfuct180Component)},//new format 21 alone
    {path:'GF-UE160-AL5',loadComponent:()=>import('./gf-ue160-al5/gf-ue160-al5.component').then(m => m.Gfue160al5Component)},//new format 20 alone
    {path:'GF-UM160',loadComponent:()=>import('./gf-um160/gf-um160.component').then(m => m.GfUM160Component)},//new format 19 alone
    {path:'GIF-2T160',loadComponent:()=>import('./gif-2t160/gif-2t160.component').then(m => m.Gif2t160Component)},// 15 alone
    {path:'GIF-2TH180',loadComponent:()=>import('./gif-2th180/gif-2th180.component').then(m => m.Gif2th180Component)},// 15 alone
    {path:'GIF-E3',loadComponent:()=>import('./gif-e3/gif-e3.component').then(m => m.Gife3Component)},// 15 with diagram
    {path:'GIF-EZ1500',loadComponent:()=>import('./gif-ez1500/gif-ez1500.component').then(m => m.Gifez1500Component)},//new format 15
    {path:'GIF-H170',loadComponent:()=>import('./gif-h170/gif-h170.component').then(m => m.Gifh170Component)},//old format 15
    {path:'GIF-H180',loadComponent:()=>import('./gif-h180/gif-h180.component').then(m => m.Gifh180Component)},//old format 16
    {path:'GIF-H180J',loadComponent:()=>import('./gif-h180j/gif-h180j.component').then(m => m.Gifh180jComponent)},//old format 17
    {path:'GIF-H190',loadComponent:()=>import('./gif-h190/gif-h190.component').then(m => m.Gifh190Component)},//old format 16
    {path:'GIF-H290EC',loadComponent:()=>import('./gif-h290ec/gif-h290ec.component').then(m => m.Gifh290ecComponent)},//old format 17
    {path:'GIF-H290Z',loadComponent:()=>import('./gif-h290z/gif-h290z.component').then(m => m.Gifh290zComponent)},//old format 17
    {path:'GIF-HQ290',loadComponent:()=>import('./gif-hq290/gif-hq290.component').then(m => m.Gifhq290Component)},//old format 17
    {path:'GIF-LV1',loadComponent:()=>import('./gif-lv1/gif-lv1.component').then(m => m.Giflv1Component)},//old format 15
    {path:'GIF-Q180',loadComponent:()=>import('./gif-q180/gif-q180.component').then(m => m.Gifq180Component)},//old format 16
    {path:'GIF-V70',loadComponent:()=>import('./gif-v70/gif-v70.component').then(m => m.Gifv70Component)},//old format 16
    {path:'GIF-XP150N',loadComponent:()=>import('./gif-xp150n/gif-xp150n.component').then(m => m.Gifxp150nComponent)},//old format 15
    {path:'GIF-XP170N',loadComponent:()=>import('./gif-xp170n/gif-xp170n.component').then(m => m.Gifxp170nComponent)},//old format 15
    {path:'GIF-XP180N',loadComponent:()=>import('./gif-xp180n/gif-xp180n.component').then(m => m.Gifxp180nComponent)},//old format 16
    {path:'GIF-XP190N',loadComponent:()=>import('./gif-xp190n/gif-xp190n.component').then(m => m.Gifxp190nComponent)},//old format 15
    {path:'GIF-XTQ160',loadComponent:()=>import('./gif-xtq160/gif-xtq160.component').then(m => m.GifXTQ160Component)},//old format 17
    {path:'IMH-10',loadComponent:()=>import('./imh-10/imh-10.component').then(m => m.Imh10Component)},//new format 8
    {path:'IMH-20',loadComponent:()=>import('./imh-20/imh-20.component').then(m => m.Imh20Component)},//new format 8
    {path:'IMH-200',loadComponent:()=>import('./imh-200/imh-200.component').then(m => m.Imh200Component)},//new format 8
    {path:'LF-GP',loadComponent:()=>import('./lf-gp/lf-gp.component').then(m => m.LfgpComponent)},//old format 7 with diagram
    {path:'LF-TP',loadComponent:()=>import('./lf-tp/lf-tp.component').then(m => m.LftpComponent)},//old format 5 with diagram
    {path:'LMD-2451MT',loadComponent:()=>import('./lmd-2451mt/lmd-2451mt.component').then(m => m.Lmd2451mtComponent)},//new format 5
    {path:'LTF-160',loadComponent:()=>import('./ltf-160/ltf-160.component').then(m => m.Lft160Component)},//old format 9
    {path:'LTF-190-10-3D',loadComponent:()=>import('./lft-190-10-3d/lft-190-10-3d.component').then(m => m.Lft190103dComponent)},//old format 6
    {path:'LTF-S190-5',loadComponent:()=>import('./lft-s190-5/lft-s190-5.component').then(m => m.Lfts1905Component)},//old format 6
    {path:'LTF-S300-10-3D',loadComponent:()=>import('./lft-s300-10-30/lft-s300-10-30.component').then(m => m.Lfts3001030Component)},//old format 6
    {path:'LTF-VH',loadComponent:()=>import('./lft-vh/lft-vh.component').then(m => m.LftvhComponent)},//old format 6
    {path:'LTF-VP',loadComponent:()=>import('./lft-vp/lft-vp.component').then(m => m.LftvpComponent)},//old format 6
    {path:'MAF-GM',loadComponent:()=>import('./maf-gm/maf-gm.component').then(m => m.MafgmComponent)},//old/new format 7
    {path:'MAF-TM',loadComponent:()=>import('./maf-tm/maf-tm.component').then(m => m.MaftmComponent)},//old/new format 8
    {path:'OBCU',loadComponent:()=>import('./obcu/obcu.component').then(m => m.ObcuComponent)},//new format 7
    {path:'OEV-191',loadComponent:()=>import('./oev-191/oev-191.component').then(m => m.Oev191Component)},//new format 6
    {path:'OEV-191H',loadComponent:()=>import('./oev-191h/oev-191h.component').then(m => m.Oev191hComponent)},//new format 6
    {path:'OEV-261H',loadComponent:()=>import('./oev-261h/oev-261h.component').then(m => m.Oev261hComponent)},//new format 6
    {path:'OEV-262H',loadComponent:()=>import('./oev-262h/oev-262h.component').then(m => m.Oev262hComponent)},//new format 6
    {path:'OEV-321UH',loadComponent:()=>import('./oev-321uh/oev-321uh.component').then(m => m.Oev321uhComponent)},//new format 6
    {path:'OFP-2',loadComponent:()=>import('./ofp-2/ofp-2.component').then(m => m.Ofp2Component)},//new format 7
    {path:'EU-ME2 PREMIER PLUS',loadComponent:()=>import('./eu-me2-premier-plus/eu-me2-premier-plus.component').then(m => m.Eume2premierplusComponent)},//new format 13
    {path:'EU-ME2_PREMIER',loadComponent:()=>import('./eu-me2-premier/eu-me2-premier.component').then(m => m.Eume2premierComponent)},//new format 13
    {path:'EU-ME2',loadComponent:()=>import('./eu-me2/eu-me2.component').then(m => m.Eume2component)},//new format 13
    {path:'CH-S190-08-LB',loadComponent:()=>import('./CH-S190-08-LB/CH-S190-08-LB.component').then(m => m.Chs19008lbcomponent)},//new format 5
    {path:'CH-S190-XZ-E',loadComponent:()=>import('./CH-S190-XZ-E/CH-S190-XZ-E.component').then(m => m.Chs190xzecomponent)},//new format 5
    {path:'CH-S200-XZ-EB-E',loadComponent:()=>import('./CH-S200-XZ-EB-E/CH-S200-XZ-EB-E.component').then(m => m.Chs200xzebeComponent)},//new format 9
    {path:'CH-S400-XZ-EB',loadComponent:()=>import('./CH-S400-XZ-EB/CH-S400-XZ-EB.component').then(m => m.Chs400xzebComponent)},//new format 7
    {path:'CH-S700-XZ-EA',loadComponent:()=>import('./CH-S700-XZ-EA/CH-S700-XZ-EA.component').then(m => m.Chs700xzeaComponent)},//new format 9
    {path:'CH-SC2-1D',loadComponent:()=>import('./CH-SC2-1D/CH-SC2-1D.component').then(m => m.Chsc21dComponent)},//new format 8
    {path:'CLH-250',loadComponent:()=>import('./CLH-250/CLH-250.component').then(m => m.Clh250component)},//new format 5
    {path:'CLH-SC',loadComponent:()=>import('./CLH-SC/CLH-SC.component').then(m => m.Clhsccomponent)},//new format 5
    {path:'CLK-4',loadComponent:()=>import('./CLK-4/CLK-4.component').then(m => m.Clk4component)},//new format 6
    {path:'CLV-180',loadComponent:()=>import('./CLV-180/CLV-180.component').then(m => m.Clv180Component)},//new format 12
    {path:'CLV-190',loadComponent:()=>import('./CLV-190/CLV-190.component').then(m => m.Clv190Component)},//new format 15
    {path:'CLV-290SL',loadComponent:()=>import('./CLV-290SL/CLV-290SL.component').then(m => m.Clv290slComponent)},//new format 16
    {path:'CLV-S40-PRO',loadComponent:()=>import('./CLV-S40-PRO/CLV-S40-PRO.component').then(m => m.CLVS40PROComponent)},//new format 10
    {path:'CLV-S190',loadComponent:()=>import('./CLV-S190/CLV-S190.component').then(m => m.Clvs190Component)},//new format 8
    {path:'CLV-S200-IR',loadComponent:()=>import('./CLV-S200-IR/CLV-S200-IR.component').then(m => m.Clvs200irComponent)},//new format 11
    {path:'CLV-S400',loadComponent:()=>import('./CLV-S400/CLV-S400.component').then(m => m.Clvs400Component)},//new format 10
    {path:'CV-170',loadComponent:()=>import('./CV-170/CV-170.component').then(m => m.Cv170Component)},//new format 15
    {path:'CV-180',loadComponent:()=>import('./CV-180/CV-180.component').then(m => m.Cv180Component)},//new format 12
    {path:'CV-190',loadComponent:()=>import('./CV-190/CV-190.component').then(m => m.Cv190Component)},//new format 16
    {path:'CV-290',loadComponent:()=>import('./CV-290/CV-290.component').then(m => m.Cv290Component)},//new format 16
    {path:'CV-1500',loadComponent:()=>import('./CV-1500/CV-1500.component').then(m => m.Cv1500Component)},//new format 12
    {path:'CV-V1',loadComponent:()=>import('./CV-V1/CV-V1.component').then(m => m.Cvv1Component)},//new format 10
    {path:'TJF-150',loadComponent:()=>import('./TJF-150/TJF-150.component').then(m => m.Tjf150Component)},//old format 17
    {path:'TJF-Q150',loadComponent:()=>import('./TJF-Q150/TJF-Q150.component').then(m => m.Tjfq150Component)},//old format 17
    {path:'TJF-Q160R',loadComponent:()=>import('./TJF-Q160R/TJF-Q160R.component').then(m => m.Tjfq160rComponent)},//old format 17
    {path:'TJF-Q160VR',loadComponent:()=>import('./TJF-Q160VR/TJF-Q160VR.component').then(m => m.Tjfq160vrComponent)},//old format 17
    {path:'TJF-Q170V',loadComponent:()=>import('./TJF-Q170V/TJF-Q170V.component').then(m => m.Tjfq170vComponent)},//old format 17
    {path:'TJF-Q190V',loadComponent:()=>import('./TJF-Q190V/TJF-Q190V.component').then(m => m.Tjfq190vComponent)},//old format 16
    {path:'UCR',loadComponent:()=>import('./UCR/UCR.component').then(m => m.Ucrcomponent)},//New format 5
    {path:'UES-40',loadComponent:()=>import('./UES-40/UES-40.component').then(m => m.Ues40Component)},//New format 11
    {path:'UHI-3',loadComponent:()=>import('./UHI-3/UHI-3.component').then(m => m.Uhi3Component)},//New format 11
    {path:'UHI-4',loadComponent:()=>import('./UHI-4/UHI-4.component').then(m => m.Uhi4Component)},//New format 11
    {path:'UHI-E',loadComponent:()=>import('./UHI-E/UHI-E.component').then(m => m.UhieComponent)},//New format 10
    {path:'UPD-3',loadComponent:()=>import('./UPD-3/UPD-3.component').then(m => m.Upd3Component)},//New format 09
    {path:'URF-P5',loadComponent:()=>import('./URF-P5/URF-P5.component').then(m => m.Urfp5Component)},//old format 5 with diagram
    {path:'URF-P6R',loadComponent:()=>import('./URF-P6R/URF-P6R.component').then(m => m.Urfp6rComponent)},//old format 5 with diagram
    {path:'URF-P7R',loadComponent:()=>import('./URF-P7R/URF-P7R.component').then(m => m.Urfp7rComponent)},//old format 5 with diagram
    {path:'URF-V',loadComponent:()=>import('./URF-V/URF-V.component').then(m => m.UrfvComponent)},//New format 9
    {path:'URF-V2R',loadComponent:()=>import('./URF-V2R/URF-V2R.component').then(m => m.Urfv2rComponent)},//New format 8
    {path:'URF-V3R',loadComponent:()=>import('./URF-V3R/URF-V3R.component').then(m => m.Urfv3rComponent)},//New format 8
    {path:'USG-400',loadComponent:()=>import('./USG-400/USG-400.component').then(m => m.Usg400Component)},//New format 12
    {path:'USG-410',loadComponent:()=>import('./USG-410/USG-410.component').then(m => m.Usg410Component)},//New format 14
    {path:'CLL-S1&CLL-V1',loadComponent:()=>import('./CLL-S1&CLL-V1/CLL-S1&CLL-V1.component').then(m => m.Clls1ncllv1component)},//New format 6
    {path:'ESG-100',loadComponent:()=>import('./ESG-100/ESG-100.component').then(m => m.Esg100component)},//New format 7
    {path:'ESG-150',loadComponent:()=>import('./ESG-150/ESG-150.component').then(m => m.Esg150component)},//New format 7
    {path:'ESG-300',loadComponent:()=>import('./ESG-300/ESG-300.component').then(m => m.Esg300component)},//New format 9
    {path:'APU-300',loadComponent:()=>import('./APU-300/APU-300.component').then(m => m.Apu300component)},//New format 9
    {path:'ESG-400',loadComponent:()=>import('./ESG-400/ESG-400.component').then(m => m.Esg400component)},//New format 9
    {path:'NEUROSCOPES',loadComponent:()=>import('./NEUROSCOPES/NEUROSCOPES.component').then(m => m.Neuroscopescomponent)},//New format 8
    {path:'OPTICAL_FORCEPS',loadComponent:()=>import('./OPTICAL_FORCEPS/OPTICAL_FORCEPS.component').then(m => m.Opticalforcepscomponent)},//New format 6
    {path:'PEDIATRIC_UROLOGY&OPTICAL_URETHROTOME',loadComponent:()=>import('./PEDIATRIC_UROLOGY&OPTICAL_URETHROTOME/PEDIATRIC_UROLOGY&OPTICAL_URETHROTOME.component').then(m => m.Pediatriccomponent)},//New format 6
  {path:'TELESCOPE',loadComponent:()=>import('./TELESCOPE/TELESCOPE.component').then(m => m.Telescopecomponent)},//New format 8
  {path:'TROCARS',loadComponent:()=>import('./TROCARS/TROCARS.component').then(m => m.Trocarscomponent)},//New format 6
  {path:'URETEROSCOPE',loadComponent:()=>import('./URETEROSCOPE/URETEROSCOPE.component').then(m => m.Ureteroscopecomponent)},//New format 9
  {path:'UROLOGY',loadComponent:()=>import('./UROLOGY/UROLOGY.component').then(m => m.Urologycomponent)},//New format 6
  {path:'WORKING_ELEMENT',loadComponent:()=>import('./WORKING_ELEMENT/WORKING_ELEMENT.component').then(m => m.Workingelementcomponent)},//New format 5
  {path:'OIP-1',loadComponent:()=>import('./OIP-1/OIP-1.component').then(m => m.Oip1component)},//New format 4
  {path:'OTV-S7H-1D-L08E',loadComponent:()=>import('./OTV-S7H-1D-L08E/OTV-S7H-1D-L08E.component').then(m => m.Otvs7h1dl08ecomponent)},//New format 5
  {path:'OTV-S7H-1N',loadComponent:()=>import('./OTV-S7H-1N/OTV-S7H-1N.component').then(m => m.Otvs7h1ncomponent)},//New format 6
  {path:'OTV-S7PRO',loadComponent:()=>import('./OTV-S7PRO/OTV-S7PRO.component').then(m => m.Otvs7proComponent)},//New format 12
  {path:'OTV-S7PROH-HD-10E',loadComponent:()=>import('./OTV-S7PROH-HD-10E/OTV-S7PROH-HD-10E.component').then(m => m.Otvs7prohhd10ecomponent)},//New format 6
  {path:'OTV-S7PROH-HD-12E',loadComponent:()=>import('./OTV-S7PROH-HD-12E/OTV-S7PROH-HD-12E.component').then(m => m.Otvs7prohhd12ecomponent)},//New format 6
  {path:'OTV-S7PROH-HD-L08E',loadComponent:()=>import('./OTV-S7PROH-HD-L08E/OTV-S7PROH-HD-L08E.component').then(m => m.Otvs7prohhdl08ecomponent)},//New format 6
  {path:'OTV-S190',loadComponent:()=>import('./OTV-S190/OTV-S190.component').then(m => m.Otvs190Component)},//New format 17
  {path:'OTV-S200',loadComponent:()=>import('./OTV-S200/OTV-S200.component').then(m => m.Otvs200Component)},//New format 15
  {path:'OTV-S200',loadComponent:()=>import('./OTV-S200/OTV-S200.component').then(m => m.Otvs200Component)},//New format 16
  {path:'OTV-S300',loadComponent:()=>import('./OTV-S300/OTV-S300.component').then(m => m.Otvs300Component)},//New format 16
  {path:'OTV-S400',loadComponent:()=>import('./OTV-S400/OTV-S400.component').then(m => m.Otvs400Component)},//New format 12
  {path:'OTV-S700',loadComponent:()=>import('./OTV-S700/OTV-S700.component').then(m => m.Otvs700Component)},//New format 15
  {path:'OTV-SC',loadComponent:()=>import('./OTV-SC/OTV-SC.component').then(m => m.Otvsccomponent)},//New format 6
  {path:'OTV-SC2',loadComponent:()=>import('./OTV-SC2/OTV-SC2.component').then(m => m.Otvsc2component)},//New format 6
  {path:'PCF-H190DL',loadComponent:()=>import('./PCF-H190DL/PCF-H190DL.component').then(m => m.Pcfh190dlComponent)},//New format 19
  {path:'PCF-PH190L',loadComponent:()=>import('./PCF-PH190L/PCF-PH190L.component').then(m => m.Pcfph190lComponent)},//New format 16
  {path:'PCF-Q180AL',loadComponent:()=>import('./PCF-Q180AL/PCF-Q180AL.component').then(m => m.Pcfq180alComponent)},//New format 18
  {path:'PSCU',loadComponent:()=>import('./PSCU/PSCU.component').then(m => m.Pscucomponent)},//New format 4
  {path:'PSF-1',loadComponent:()=>import('./PSF-1/PSF-1.component').then(m => m.Psf1Component)},//New format 19
  {path:'SIF-H290S',loadComponent:()=>import('./SIF-H290S/SIF-H290S.component').then(m => m.Sifh290sComponent)},//New format 15
  {path:'SIF-Q180',loadComponent:()=>import('./SIF-Q180/SIF-Q180.component').then(m => m.Sifq180Component)},//New format 16
  {path:'SONOSURG-G2',loadComponent:()=>import('./SONOSURG-G2/SONOSURG-G2.component').then(m => m.Sonosurgg2component)},//New format 6
  {path:'SPL-G',loadComponent:()=>import('./SPL-G/SPL-G.component').then(m => m.Splgcomponent)},//New format 5
  {path:'TGF-UC180J',loadComponent:()=>import('./TGF-UC180J/TGF-UC180J.component').then(m => m.Tgfuc180jComponent)},//New format 19
  {path:'LF-DP',loadComponent:()=>import('./LF-DP/LF-DP.component').then(m => m.LfdpComponent)},//old format 5 with diagram
  {path:'GIF-1TH190',loadComponent:()=>import('./GIF-1TH190/GIF-1TH190.component').then(m => m.Gif1th190Component)},//old format 15
  {path:'SIF-H190',loadComponent:()=>import('./SIF-H190/SIF-H190.component').then(m => m.Sifh190Component)},//old format 15
  {path:'EU-ME3',loadComponent:()=>import('./EU-ME3/EU-ME3.component').then(m => m.Eume3Component)},//New format 17
  {path:'VIDEOSCOPE_CABLE',loadComponent:()=>import('./VIDEOSCOPE_CABLE/VIDEOSCOPE_CABLE.component').then(m => m.Videoscopecablecomponent)},//New format 05
  {path:'ULTRASOUND_PROBE',loadComponent:()=>import('./ULTRASOUND_PROBE/ULTRASOUND_PROBE.component').then(m => m.Ultrasoundprobecomponent)},//New format 05
  {path:'ULTRASOUND_KEYBOARD',loadComponent:()=>import('./ULTRASOUND_KEYBOARD/ULTRASOUND_KEYBOARD.component').then(m => m.Ultrasoundkeyboardcomponent)},//New format 05
  {path:'TRANSDUCER',loadComponent:()=>import('./TRANSDUCER/TRANSDUCER.component').then(m => m.Transducercomponent)},//New format 05
  {path:'PROBE_DRIVING_UNIT',loadComponent:()=>import('./TRANSDUCER/TRANSDUCER.component').then(m => m.Transducercomponent)},//New format 06
  {path:'MONITOR',loadComponent:()=>import('./MONITOR/MONITOR.component').then(m => m.Monitorcomponent)},//New format 05
  {path:'LIGHT_GUIDE_CABLE',loadComponent:()=>import('./LIGHT_GUIDE_CABLE/LIGHT_GUIDE_CABLE.component').then(m => m.Lgcablecomponent)},//New format 05
  {path:'HF_CABLE',loadComponent:()=>import('./HF_CABLE/HF_CABLE.component').then(m => m.Hfcablecomponent)},//New format 05
  {path:'KEYBOARD',loadComponent:()=>import('./KEYBOARD/KEYBOARD.component').then(m => m.Keyboardcomponent)},//New format 05
  {path:'FOOT_SWITCH',loadComponent:()=>import('./FOOT_SWITCH/FOOT_SWITCH.component').then(m => m.Footswitchcomponent)},//New format 05
  {path:'GF-UE190',loadComponent:()=>import('.//GF-UE190/GF-UE190.component').then(m => m.Gfue190Component)},//new format 20 alone
  {path:'BF-XP190',loadComponent:()=>import('./BF-XP190/BF-XP190.component').then(m => m.BfxP190Component)},
  {path:'ENDOEYE',loadComponent:()=>import('./ENDOEYE/ENDOEYE.component').then(m => m.Endoeyecomponent)},//New format 05
  {path:'GIF-H290T',loadComponent:()=>import('./GIF-H290T/GIF-H290T.component').then(m => m.Gifh290tComponent)},//old format 17
  {path:'TJF-145',loadComponent:()=>import('./TJF-145/TJF-145.component').then(m => m.Tjf145Component)},//old format 17
  {path:'MU1',loadComponent:()=>import('./MU1/MU1.component').then(m => m.Mu1component)},//New format 04
  {path:'LEAKAGE_TESTER',loadComponent:()=>import('./LEAKAGE_TESTER/LEAKAGE_TESTER.component').then(m => m.Leakagetestercomponent)},//New format 05
  {path:'HYSTERO_FLOW',loadComponent:()=>import('./HYSTERO_FLOW/HYSTERO_FLOW.component').then(m => m.Hysteroflowcomponent)},//New format 04
  {path:'CH-S200-08-LB',loadComponent:()=>import('./CH-S200-08-LB/CH-S200-08-LB.component').then(m => m.Chs20008lbComponent)},//new format 9
  {path:'PCF-H190TL',loadComponent:()=>import('./pcf-h190-tl/pcf-h190-tl.component').then(m => m.PCFH190TLComponent)},
  {path:'ENF-V4',loadComponent:()=>import('./enf-v4/enf-v4.component').then(m => m.ENFV4Component)},//new format 9

  ]}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

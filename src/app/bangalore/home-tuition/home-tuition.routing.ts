import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
//import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeTuitionComponent } from './home-tuition.component';
import { HomeTuitionInBangaloreComponent } from './home-tuition-in-bangalore/home-tuition-in-bangalore.component';

const routes: Routes = [
    {
        path: '',
        component: HomeTuitionComponent,
        children: [
            //Subject Routing
            { path: 'home-tuition-in-bangalore', component: HomeTuitionInBangaloreComponent },
            { path: 'maths-tutors-in-bangalore', component: HomeTuitionInBangaloreComponent },
            { path: 'science-tutors-in-bangalore', component: HomeTuitionInBangaloreComponent },
            { path: 'english-tutors-in-bangalore', component: HomeTuitionInBangaloreComponent },
            { path: 'physics-tutors-in-bangalore', component: HomeTuitionInBangaloreComponent },
            { path: 'social-science-tutors-in-bangalore', component: HomeTuitionInBangaloreComponent },
            { path: 'hindi-tutors-in-bangalore', component: HomeTuitionInBangaloreComponent },
            { path: 'chemistry-tutors-in-bangalore', component: HomeTuitionInBangaloreComponent },
            { path: 'biology-tutors-in-bangalore', component: HomeTuitionInBangaloreComponent },
            { path: 'accounting-tutors-in-bangalore', component: HomeTuitionInBangaloreComponent },
            { path: 'history-tutors-in-bangalore', component: HomeTuitionInBangaloreComponent },
            { path: 'geography-tutors-in-bangalore', component: HomeTuitionInBangaloreComponent },

            //State Board/CBSC/ICSC Board Routing
            { path: 'cbse-tutors-in-bangalore', component: HomeTuitionInBangaloreComponent },
            { path: 'icse-tutors-in-bangalore', component: HomeTuitionInBangaloreComponent },
            { path: 'state-board-tutors-in-bangalore', component: HomeTuitionInBangaloreComponent },
            { path: 'igcse-tutors-in-bangalore', component: HomeTuitionInBangaloreComponent },
            { path: 'karanaka-board-tutors-in-bangalore', component: HomeTuitionInBangaloreComponent },

            //Grade Or class Routing
            { path: 'nursery-kg-tuition-tutors-in-bangalore', component: HomeTuitionInBangaloreComponent },
            { path: 'class-6-7-8-tuition-tutors-in-bangalore', component: HomeTuitionInBangaloreComponent },
            { path: 'class-1-2-3-4-5-tuition-tutors-in-bangalore', component: HomeTuitionInBangaloreComponent },
            { path: 'class-9-tuition-tutors-in-bangalore', component: HomeTuitionInBangaloreComponent },
            { path: 'class-10-tuition-tutors-in-bangalore', component: HomeTuitionInBangaloreComponent },
            { path: 'class-11-science-tuition-tutors-in-bangalore', component: HomeTuitionInBangaloreComponent },
            { path: 'class-11-commerce-tuition-tutors-in-bangalore', component: HomeTuitionInBangaloreComponent },
            { path: 'class-11-arts-tuition-tutors-in-bangalore', component: HomeTuitionInBangaloreComponent },
            { path: 'class-12-science-tuition-tutors-in-bangalore', component: HomeTuitionInBangaloreComponent },
            { path: 'class-12-arts-tuition-tutors-in-bangalore', component: HomeTuitionInBangaloreComponent },
            { path: 'class-12-commerce-tuition-tutors-in-bangalore', component: HomeTuitionInBangaloreComponent },

            //Area Or Location Based Routing
            { path: 'a-f-station-yelahanka-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'adugodi-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'agara-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'agram-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'air-force-hospital-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'amruthahalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'anandnagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'anekal-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'anekalbazar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'arabic-college-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'aranya-bhavan-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'ashoknagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'attibele-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'attur-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'austin-town-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'avalahalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'avani-sringeri-mutt-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'avenue-road-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'b-sk-ii-stage-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'bsf-campus-yelahanka-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'bagalgunte-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'bagalur-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'balepete-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'banashankari-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'banashankari-iii-stage-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'banaswadi-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'bandikodigehalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'bangalore-air-port-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'bangalore-bazaar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'bangalore-city-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'bangalore-corporation-building-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'bangalore-dist-offices-bldg-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'bangalore-fort-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'bangalore-sub-fgn-post-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'bangalore.-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'bannerghatta-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'bannerghatta-road-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'bapujinagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'basavanagudi-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'basavaraja-market-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'basaveshwaranagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'basaveswaranagar-ii-stage-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'bellandur-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'benson-town-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'bestamaranahalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'bettahalsur-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'bhashyam-circle-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'bhattarahalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'bidaraguppe-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'bidrahalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'bnagalore-viswavidalaya-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'bommanahalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'brigade-road-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'byatarayanapura-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'c.v.raman-nagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'cmp-centre-and-school-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'crpf-campus-yelahanka-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'cahmrajendrapet-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'chamrajpet-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'chamrajpet-bazar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'chandra-lay-out-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'chickpet-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'chikkabettahalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'chikkajala-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'chikkalasandra-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'chikkanahalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'chunchanakuppe-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'cubban-road-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'dasarahalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'deepanjalinagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'devanagundi-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'devarjeevanahalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'devasandra-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'dharmaram-college-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'doddagubbi-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'doddajala-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'doddakallasandra-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'doddanekkundi-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'domlur-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'dommasandra-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'doorvaninagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'dr.-ambedkar-veedhi-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'electronics-city-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'fraser-town-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'g.k.v.k.-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'gaviopuram-extension-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'gaviopuram-guttanahalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'gayathrinagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'girinagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'goraguntepalya-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'goripalya-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'governmemnt-electric-factory-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'govindapalya-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'gunjur-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'h-m-t-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'h.a.-farm-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'h.a.l-ii-stage-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'h.k.p.-road-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'hsr-layout-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'hampinagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'handenahalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'harogadde-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'hebbal-kempapura-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'hennagara-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'highcourt-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'hongasandra-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'hoodi-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'horamavu-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'hosakerehalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'hosur-road-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'hulimangala-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'hulimavu-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'hulsur-bazaar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'hunasamaranahalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'isro-anthariksha-bhavan-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'immedihalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'indalavadi-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'indiranagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'indiranagar-com.-complex-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'industrial-estate-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'ittamadu-layout-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'j-p-nagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'j.c.nagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'jakkur-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'jalahalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'jalahalli-east-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'jalahalli-village-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'jalahalli-west-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'jalavayuvihar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'jayanagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'jayanagar-west-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'jayangar-east-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'jayangar-iii-block-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'jeevanahalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'jeevanbhimanagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'jigani-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'jp-nagar-iii-phase-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'k-h-b-colony-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'k.-g.-road-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'k.p.west-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'kacharakanahalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'kadabagere-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'kadugodi-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'kalkunte-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'kalyanagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'kamagondanahalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'kamakshipalya-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'kannamangala-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'kannur-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'kanteeravanagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'kathriguppe-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'kenchanahalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'kendriya-sadan-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'kendriya-vihar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'kodigehalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'konanakunte-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'koramangala-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'koramangala-i-block-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'koramangala-vi-bk-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'kothanur-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'krishnarajapuram-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'krishnarajapuram-r-s-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'kugur-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'kumaraswamy-layout-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'kumbalgodu-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'kundalahalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'lalbagh-west-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'legislators-home-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'lingarajapuram-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'm-s-r-road-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'madhavan-park-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'madivala-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'magadi-road-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'mahadevapura-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'mahalakshmipuram-layout-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'mahatma-gandhi-road-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'malkand-lines-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'mallathahalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'malleswaram-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'malleswaram-west-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'mandalay-lines-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'marathahalli-colony-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'marsur-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'maruthi-sevanagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'mathikere-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'mavalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'mayasandra-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'medihalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'medimallasandra-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'mico-layout-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'milk-colony-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'mount-st-joseph-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'msrit-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'mundur-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'museum-road-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'muthanallur-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'muthusandra-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'nal-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'naduvathi-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'nagarbhavi-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'nagasandra-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'nagavara-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'nandinilayout-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'narasimharaja-colony-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'narasimjharaja-road-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'narayan-pillai-street-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'nayandahalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'neralur-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'new-tharaggupet-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'new-thippasandra-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'okalipuram-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'p&t-col.-kavalbyrasandra-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'padmanabhnagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'palace-guttahalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'panathur-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'pasmpamahakavi-road-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'peenya-i-stage-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'peenya-ii-stage-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'peenya-small-industries-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'r-t-nagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'r.m.v.-extension-ii-stage-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'rajajinagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'rajajinagar-i-block-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'rajajinagar-ivth-block-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'rajanakunte-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'rajarajeshwarinagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'rajbhavan-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'ramachandrapuram-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'ramagondanahalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'ramakrishna-hegde-nagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'ramamurthy-nagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'rameshnagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'richmond-town-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'rv-niketan-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'sadashivanagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'sahakaranagar-p.o-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'samandur-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'samethanahalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'sampangiramnagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'sarjapura-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'science-institute-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'seshadripuram-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'shankarpura-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'shanthinagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'sidihoskote-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'singanayakanahalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'sivan-chetty-gardens-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'someswarapura-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'sri-jayachamarajendra-road-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'srirampuram-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'st.-johns-medical-college-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'st.-thomas-town-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'state-bank-of-mysore-colony-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'subhashnagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'subramanyapura-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'swimming-pool-extn-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'tarahunise-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'tavarekere-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'taverekere-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'thambuchetty-palya-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'thammanayakanahalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'tilaknagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'training-command-iaf-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'tyagrajnagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'ullalu-upanagara-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'vanakanahalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'vartur-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'vasanthnagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'venkatarangapura-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'venkateshapura-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'vidhana-soudha-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'vidyanagara-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'vidyaranyapura-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'vijayanagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'vijayanagar-east-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'vikramnagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'vimapura-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'virgonagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'visveswarapuram-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'viswaneedam-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'vittalnagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'viveknagar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'vyalikaval-extn-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'wheel-and-axle-plant-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'whitefield-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'wilson-garden-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'yadavanahalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'yediyur-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'yelachenahalli-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'yelahanka-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'yelahanka-satellite-town-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'yemalur-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'yeshwanthpur-bazar-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'yeswanthpura-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'btm-layout-1st-stage-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },
            { path: 'btm-layout-2nd-stage-home-tuition-tutors', component: HomeTuitionInBangaloreComponent },


            { path: '', redirectTo: 'home-tuition-in-bangalore', pathMatch: 'full' },
            { path: '**', redirectTo: 'home-tuition-in-bangalore' }
        ]
    }
];

export const routing = RouterModule.forChild(routes);
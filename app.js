var titulo =[]
titulo [0]= 'Cursos Bradesco';
titulo [1]= 'Banco PAN Java Developer';
titulo [2]= 'Curso em Vídeo';
titulo [3]= 'Inglês do Zero';
titulo [4]= 'Cursos Sebrae';
titulo [5]= 'Apostila <br> Lógica de Programação';
titulo [6]= 'Livro <br> Código Limpo';
/*titulo [7]= '';
titulo [8]= '';
titulo [9]= '';
titulo [10]= '';*/


var imagem = []
imagem[0] = 'https://clickpetroleoegas.com.br/blog/wp-content/uploads/2022/09/Cursos-Online-Gratuitos-da-Fundacao-Bradesco-com-Certificado.jpeg';
imagem[1] = 'https://hermes.digitalinnovation.one/files/assets/30a11e25-02ee-4c50-bf24-b5858d8aea6f.png';
imagem[2] = 'https://www.cursoemvideo.com/wp-content/uploads/2019/08/cursoemvideo-logo-branca.png';
imagem[3] = 'https://i.scdn.co/image/c73bd35168ab19de282207ba78b8b6a145d7bf0e';
imagem[4] = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Sebrae.svg/1200px-Sebrae.svg.png';
imagem[5] = 'https://d1i4tvf70h7zdy.cloudfront.net/ead/cursos/5c782f2ad62ee.png';
imagem[6] = 'https://altabooks.com.br/wp-content/uploads/2021/07/Codigo_Limpo-scaled.jpg';
/*imagem[7] = '';
imagem[8] = '';
imagem[9] = '';
imagem[10] = '';*/



var informacoes = []
informacoes[0]= 'Plataforma Fundação Bradesco com cursos grátis de programação e de outras áreas importantes para crescimento no mercado de trabalho.'
informacoes[1]= 'O primeiro programa do Banco PAN em parceria com a DIO chega com uma trilha completa em Java Spring.'
informacoes[2]= 'Uma plataforma muito boa de cursos de tecnologia.';
informacoes[3]= 'Podcast muito bom pra quem tem interesse em aprender inglês no horário vago.';
informacoes[4]= 'Cursos gratuitos sobre negócios.';
informacoes[5]= 'Conhecimentos básicos de lógica de programação.';
informacoes[6]= 'Habilidades práticas do agile Software.';
/*informacoes[7]= '';
informacoes[8]= '';
informacoes[9]= '';
informacoes[10]= '';*/


var colaborador = []
colaborador[0]= 'Lucas Tamura';
colaborador[1]= 'Jean Carlo';
colaborador[2]= 'Gilmar Farias';
colaborador[3]= 'Junio Lucio';
colaborador[4]= 'Hugo Designer';
colaborador[5]= 'Junio Lucio';
colaborador[6]= 'Sarah Nunes';
/*colaborador[7]= '';
colaborador[8]= '';
colaborador[9]= '';
colaborador[10]= '';*/


var data = []
data[0]='16/02/2023';
data[1]='16/02/2023';
data[2]='16/02/2023';
data[3]='16/02/2023';
data[4]='16/02/2023';
data[5]='16/02/2023';
data[6]='16/02/2023';
/*/data[7]='16/02/2023';
data[8]='16/02/2023';
data[9]='16/02/2023';
data[10]='16/02/2023';*/

var link = []
link[0]= 'https://www.ev.org.br/areas-de-interesse/programacao';
link[1]= 'https://dio.me/bootcamp/banco-pan-java-developer?ref=CG&utm_source=facebook&utm_medium=pay&utm_campaign=banco-pan-java-developer&fbclid=PAAabObYEDkXMSOkzsbcjPf3Hg7XEgIVdRd_TnSF2Q14lbW9ATtvjYSayHfyc_aem_AfIK4H1Uj2aowJE-ueK-VH39HgP5rLd20JJVe-YCXn_7GPXLVZXfFY-0wefce4sYdlIVnbsqHf7zvijR2FtmhFxoY_M2_EybOXVnQUTh0jpWDKJfhUEMUT29KPyWL2DUVDM';
link[2]= 'https://www.cursoemvideo.com/';
link[3]= 'https://open.spotify.com/episode/4tWsLNxk6oCxVzbUDxjKRd?si=x2hMsvHRSaSDhOS7ch_FwA&nd=1';
link[4]= 'https://sebrae.com.br/sites/PortalSebrae/cursosonline?utm_source=google_search&utm_medium=search&utm_campaign=aw-portal&utm_term=texto-art&utm_content=aw-pot0002&gclid=Cj0KCQiAxbefBhDfARIsAL4XLRrm8w23mGL6vH-AFpO3JVDr7dyL1W9xdRmbNBGa-zDJ0t18gkEFcUMaAtVdEALw_wcB';
link[5]= 'https://drive.google.com/file/d/1eDEAcVMIDgBPGPMMOP22yXIjzpOpIyCi/view?usp=sharing';
link[6]= 'https://drive.google.com/file/d/15rFjpRSK7hJ9hXL-Ve7YkqOxhkvGRaFL/view?usp=sharing';
/*link[7]= '';
link[8]= '';
link[9]= '';
link[10]= '';*/


document.write('<div class="flex">')


var i = 0;
while(i < titulo.length){
    document.write('<div class="curso">')
    document.write('<h3>'+titulo[i]+'</h3>')
    document.write('<div class="centro"><img src="'+ imagem[i] +'" alt=""></div>')
    document.write('<p><b>Informações:</b>'+ informacoes[i] +'</p>')
    document.write('<br>')
    document.write('<p><b>Colaborador:</b>'+ colaborador[i] +'</p>')
    document.write('<p><b>Data:</b>'+data[i]  +'</p>')
    document.write('<div class="centro"><a href="'+ link[i] +'" target="_blank">LINK</a></div>')
    document.write('</div>')
    i++;
}



document.write('</div>')
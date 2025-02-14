$(document).ready(function () {
    var page = 1;
    $('#tulip').click(function () {
        $(this).addClass('started');
        $('h1').addClass('started');
        $('#audio')[0].play();
        setTimeout(function () {
            $('.polaroid-1').addClass('started');
        }, 2000);
        setTimeout(function () {
            $('.content-card').addClass('started');
        }, 3000);
        setTimeout(function () {
            $('.button').addClass('started');
        }, 6000);
    });
    $('#next').click(function () {
        $('.polaroid-1').removeClass('started');
        $('.content-card').removeClass('started');
        $('.button').removeClass('started');
        if(page == 1){
           setTimeout(function(){
            $('#imgcard').attr('src', 'img2.jpg');
           },1000);
            $('#date').text('Dec 11 2024, 10:00am');
            $('#content').text('This candy, eto yung unang pagkain na binigay mo sa akin, Oo para sa iba simpleng candy lang to pero para sakin iba yung feeling kapag galing sayo I feel so special HAHAHAHA  eee nakakakilig nagkamali pa nga ako ng paghula sa flavor nun sabi ko melon HAHAHAHAHAH😍😍');
            setTimeout(function () {
                $('.polaroid-1').addClass('started');
            }, 2000);
            setTimeout(function () {
                $('.content-card').addClass('started');
            }, 3000);
            setTimeout(function () {
                $('.button').addClass('started');
            }, 6000);
        }
        if(page == 2){
            setTimeout(function(){
                $('#imgcard').attr('src', 'img4.jpg');
               },1000);
               $('#date').text('Nov 8 2024, 7:00pm');
            $('#content').text('First Thursday. Unang pag gala natin nang tayong dalawa lang HAHAHAA tanda ko pa na puro mga ginagawa nang taong gusto natin dati yung pinaguusapan natin. kung gaano kasakit yung ginawa nila at gaano tayo katanga. then look at us now Sobrang layo na natin sa dating tayo😘');
            setTimeout(function () {
                $('.polaroid-1').addClass('started');
            }, 2000);
            setTimeout(function () {
                $('.content-card').addClass('started');
            }, 3000);
            setTimeout(function () {
                $('.button').addClass('started');
            }, 6000);
        }
        if(page == 3){
            setTimeout(function(){
                $('#imgcard').attr('src', 'img3.jpg');
               },1000);
               $('#date').text('Dec 1 2024, 5:00am');
            $('#content').text('Unang Long ride. Oo every Thursday lumalabas tayo pero sa lahat ng ride natin eto yung pinaka matagal, pinaka malayu at pinakamasaya sa pakiramdam (ko) eto yung araw na unang beses ko makakita ng Fog sa personal kasama pa yung taong gusto ko. Dito mas nakilala kita. nakita ko kung gaano ka kasaya (always naman) ,ka pagod at kahina sa lamig HAHAHAHAHA ');
            setTimeout(function () {
                $('.polaroid-1').addClass('started');
            }, 2000);
            setTimeout(function () {
                $('.content-card').addClass('started');
            }, 3000);
            setTimeout(function () {
                $('.button').addClass('started');
            }, 6000);
        }
        if(page == 4){
            $('.heading-wrapper').addClass('video');
            $('.polaroi-1').hide();
            $('#content').text('Sinubukan kong balikan lahat ng yan nang mag isa, Iba pala sa feeling. bumalik ako sa lugar kung saan tayo magkasamang naglakbay, sa pinaka malayong lugar na napuntahan natin and I realize na iba parin pala ang pakiramdam pag kasama kita, ka kwentuhan ka at tumawa sa mga corning joke na lumalabas sa bibig ko. Sinubukan kong lumabas nung thursday night panoorin ang city lights ng magisa. Malungkot, iba kasi yung pakiramdam kapag nandyan yung taong makikinig sayo maglalabas ng sama ng loob, makikipag kwentuhan kahit wala ng kwenta mga  sinasabi mo. ');
            setTimeout(function () {
                $('.content-card').addClass('started');
                //$('.content-card').addClass('video');
            }, 2000);
            setTimeout(function () {
                $('.button').addClass('started');
            }, 4000);
        }
        if(page == 5){
            $('.heading-wrapper').addClass('video');
            $('.polaroi-1').hide();
            $('#content').text('Binili ko yung pagkain na binili mo sakin nung nakaraan and naging plain nalang panlasa ko sa candy na iyon iba parin pala kapag galing sa taong gusto mo yung pagkain nayun. binalikan ko yung lugar kung saan kita unang sinundo, dun ko na realize na mahirap pala pag wala ka nang hinihintay, mahirap mag isa, malungkot pag walang kasama. Salamat kasi dumating ka and kung babalik man ako sa panahon kung kailan unang beses ko naranasan lahat nang yan, yun at yun parin ang pipiliin ko gawin. Hindi kaman ready sa ngayun na pumasok sa relasyon salamat parin kasi pinaranas mo ulit sa akin ang mainlove. Salamat bes and always take care of yourself sabi kalang pag di mo na kayang alagaan sarili mo ako na gagawa 🤪');
            setTimeout(function () {
                $('.content-card').addClass('started');
                $('.content-card').addClass('video');
            }, 2000);
            setTimeout(function () {
                $('.play-button').addClass('started');
                $('.button').hide();
            }, 4000);
        }
        $('.button').removeClass('started');
        page++;
    });
    $('.play-button').click(function(){

        $('.modal-wrapper').show();
        $('#audio')[0].pause();
        $('#mainVideo')[0].play();
    });
    $('.modal-backdrop').click(function(){

        $('.modal-wrapper').hide();
        $('#mainVideo')[0].pause();
        $('.last-page').css({
            'display': 'flex',
        })
    });

});

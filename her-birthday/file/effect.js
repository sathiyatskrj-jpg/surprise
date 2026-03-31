$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('#ayusharma-container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6').stop();
			$('#b11').animate({top:240, left: vw-250},500);
			$('#b22').animate({top:240, left: vw-150},500);
			$('#b33').animate({top:240, left: vw-50},500);
			$('#b44').animate({top:240, left: vw+50},500);
			$('#b55').animate({top:240, left: vw+150},500);
			$('#b66').animate({top:240, left: vw+250},500);
		});

	$('#turn_on').click(function(){
		$('body').addClass('lights-on');
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		// Removed body peach class, keeping our premium starry bg
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() { $('#b1').animate({left:1000*Math.random(),bottom:500*Math.random()},10000,function(){ loopOne(); }); }
	function loopTwo() { $('#b2').animate({left:1000*Math.random(),bottom:500*Math.random()},10000,function(){ loopTwo(); }); }
	function loopThree() { $('#b3').animate({left:1000*Math.random(),bottom:500*Math.random()},10000,function(){ loopThree(); }); }
	function loopFour() { $('#b4').animate({left:1000*Math.random(),bottom:500*Math.random()},10000,function(){ loopFour(); }); }
	function loopFive() { $('#b5').animate({left:1000*Math.random(),bottom:500*Math.random()},10000,function(){ loopFive(); }); }
	function loopSix() { $('#b6').animate({left:1000*Math.random(),bottom:500*Math.random()},10000,function(){ loopSix(); }); }

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		loopOne(); loopTwo(); loopThree(); loopFour(); loopFive(); loopSix();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});
		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b11').animate({top:240, left: vw-250},500);
		$('#b22').animate({top:240, left: vw-150},500);
		$('#b33').animate({top:240, left: vw-50},500);
		$('#b44').animate({top:240, left: vw+50},500);
		$('#b55').animate({top:240, left: vw+150},500);
		$('#b66').animate({top:240, left: vw+250},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.glass-nav').fadeOut('slow'); // Fade out navbar completely
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;
		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(1000).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1600);
			if(i==22){ // 22 lines in our personalize message
				$("p:nth-child(22)").fadeOut('slow').delay(1000).promise().done(function () {
					// GRAND TRANSITION
					$('#ayusharma-container').fadeOut(2000, function() {
						// Show the tree canvas container
						$('#tree-container').css('display', 'block').animate({ opacity: 1 }, 2000, function() {
							initCanvasTree();
						});
					});
				});
			}
			else{
				msgLoop(i);
			}			
		});
		}
		
		msgLoop(0);
	});
});

function initCanvasTree() {
    var canvas = $('#canvas');
    if (!canvas[0].getContext) { return; }

    var ctx = canvas[0].getContext('2d');
    canvas[0].width = canvas.width() || 1100;
    canvas[0].height = canvas.height() || 680;
    var width = canvas[0].width;
    var height = canvas[0].height;

    var opts = {
        seed: { x: width / 2 - 20, color: "rgb(190, 26, 37)", scale: 2 },
        branch: [
            [535, 680, 570, 250, 500, 200, 30, 100, [
                [540, 500, 455, 417, 340, 400, 13, 100, [
                    [450, 435, 434, 430, 394, 395, 2, 40]
                ]],
                [550, 445, 600, 356, 680, 345, 12, 100, [
                    [578, 400, 648, 409, 661, 426, 3, 80]
                ]],
                [539, 281, 537, 248, 534, 217, 3, 40],
                [546, 397, 413, 247, 328, 244, 9, 80, [
                    [427, 286, 383, 253, 371, 205, 2, 40],
                    [498, 345, 435, 315, 395, 330, 4, 60]
                ]],
                [546, 357, 608, 252, 678, 221, 6, 100, [
                    [590, 293, 646, 277, 648, 271, 2, 80]
                ]]
            ]] 
        ],
        bloom: { num: 700, width: 1080, height: 650 },
        footer: { width: 1200, height: 5, speed: 10 }
    };

    var tree = new Tree(canvas[0], width, height, opts);
    var seed = tree.seed;
    var foot = tree.footer;
    var hold = 1;

    canvas.click(function(e) {
        var offset = canvas.offset(), x, y;
        x = e.pageX - offset.left;
        y = e.pageY - offset.top;
        if (seed.hover(x, y)) {
            hold = 0; 
            canvas.unbind("click");
            canvas.unbind("mousemove");
            canvas.removeClass('hand');
            if(typeof createConfetti === 'function') createConfetti();
            
            var growAnimate = eval(Jscex.compile("async", function () {
                do {
                    tree.grow();
                    $await(Jscex.Async.sleep(10));
                } while (tree.canGrow());
            }));

            var flowAnimate = eval(Jscex.compile("async", function () {
                do {
                    tree.flower(2);
                    $await(Jscex.Async.sleep(10));
                } while (tree.canFlower());
            }));

            var moveAnimate = eval(Jscex.compile("async", function () {
                tree.snapshot("p1", 240, 0, 610, 680);
                while (tree.move("p1", 450, 0)) {
                    foot.draw();
                    $await(Jscex.Async.sleep(10));
                }
                foot.draw();
                tree.snapshot("p2", 450, 0, 610, 680);
                
                // Show personalized final message!
                $('#code').show().typewriter();
            }));

            var jumpAnimate = eval(Jscex.compile("async", function () {
                while (true) {
                    tree.ctx.clearRect(0, 0, width, height);
                    tree.jump();
                    foot.draw();
                    $await(Jscex.Async.sleep(25));
                }
            }));

            var runAsync = eval(Jscex.compile("async", function () {
                while (seed.canScale()) {
                    seed.scale(0.95);
                    $await(Jscex.Async.sleep(10));
                }
                while (seed.canMove()) {
                    seed.move(0, 2);
                    foot.draw();
                    $await(Jscex.Async.sleep(10));
                }

                $await(growAnimate());
                $await(flowAnimate());
                $await(moveAnimate());
                jumpAnimate().start(); // Keeps looping jump infinitely
            }));
            
            runAsync().start();
        }
    }).mousemove(function(e){
        var offset = canvas.offset(), x, y;
        x = e.pageX - offset.left;
        y = e.pageY - offset.top;
        canvas.toggleClass('hand', seed.hover(x, y));
    });

    seed.draw();
}
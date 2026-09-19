// ============================
// SELECT ELEMENTS
// ============================

const landing = document.getElementById("landing");

const envelopeScreen = document.getElementById("envelope-screen");

const envelope = document.getElementById("envelope");

const letterScreen = document.getElementById("letter-screen");

const letterText = document.getElementById("letter-text");

const continueBtn = document.getElementById("continue-btn");

const memoriesScreen = document.getElementById("memories-screen");

const songPageBtn = document.getElementById("song-page");

const songScreen = document.getElementById("song-screen");

const endingBtn = document.getElementById("ending-btn");

const endingScreen = document.getElementById("ending-screen");

const backgroundMusic = document.getElementById("background-music");
const dedicationMusic = document.getElementById("dedication-music");

// ============================
// LETTER
// ============================

const message = `Happy Birthday to my forever wifey 🤍

First of all...

I've officially forgiven you for abandoning me in Bangladesh and moving all the way to Spain.

You're welcome. 😤

But seriously, I hope you know how special you actually are to me.

I don't think you always realise how much of an impact you have on the people around you.

You're one of those people who can make someone feel comfortable just by being yourself.

You have this way of making even the most random conversations memorable.

And honestly, some of my favourite moments with you aren't even some huge important memories.

It's the stupid conversations.

The random things we'd talk about.

The times we'd laugh over something that probably wasn't even that funny.

The little things that somehow became our thing.

I know we haven't really been talking as much lately.

A lot of it is probably because I've been busy with exams,
and I know you've been busy with your own things too.

But honestly, I think we're both just tired as fuck most of the time. 😭

Sometimes we probably have things we want to say,
but we're too exhausted to actually have a proper conversation.

And even though we don't talk as much as we used to,
please don't ever think that means I care about you any less.

I still think about you.

I still miss you.

And you're still my person,
even on the days when we barely talk.

I also really hope you know that you don't have to have everything figured out right now.

Life is weird.

Sometimes you feel like you're doing great,
and sometimes you barely have the energy to do anything at all.

And that's okay.

You don't have to constantly be productive or have everything together to be someone worth being proud of.

I'm proud of you for making it through the days that were difficult too.

And I genuinely hope you start being a little kinder to yourself.

You deserve to look at yourself and see all the good things that other people see in you.

I hope this next year brings you so many good things.

I hope you get to do the things you've always wanted to do.

I hope you become ridiculously successful.

I hope you build the kind of life that makes you genuinely happy.

And when you eventually become rich and successful,
please remember that I was here before all of that. 😭

I miss our random late-night conversations.

I miss bullying and beating you.

Thank you for being someone I can call my wifey.

Thank you for being you.

And no matter how busy life gets,
or how many kilometres are between us,
I really hope we never stop being us.

Happy Birthday, Babeeee.

I love you. 🤍

(Btw I still haven't forgotten that banana practice thing you did... gonna try it out soon too 😏)`
;


// ============================
// TYPING
// ============================

let index = 0;

function typeLetter(){

    if(index < message.length){

        letterText.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeLetter,35);

    }

    else{

        continueBtn.classList.remove("hidden");

    }

}


// ============================
// LANDING
// ============================

landing.addEventListener("click",function(){

    backgroundMusic.volume = 0.25;
    backgroundMusic.play();

    landing.classList.add("fadeOut");

    setTimeout(function(){

        landing.classList.add("hidden");

        envelopeScreen.classList.remove("hidden");

    },800);

});

// ============================
// ENVELOPE
// ============================

envelope.addEventListener("click",function(){

    envelope.classList.add("open");

    setTimeout(function(){

        envelopeScreen.classList.add("hidden");

        letterScreen.classList.remove("hidden");

        typeLetter();

    },1200);

});


// ============================
// CONTINUE
// ============================

continueBtn.addEventListener("click",function(){

    letterScreen.classList.add("hidden");

    memoriesScreen.classList.remove("hidden");

});


// ============================
// SONG PAGE
// ============================

songPageBtn.addEventListener("click", function () {
    memoriesScreen.classList.add("hidden");
    songScreen.classList.remove("hidden");


    // Add these two lines so the dedication song starts playing!
    dedicationMusic.volume = 0.8;
    dedicationMusic.play();
});

// ============================
// ENDING
// ============================

endingBtn.addEventListener("click",function(){

    songScreen.classList.add("hidden");

    endingScreen.classList.remove("hidden");

});

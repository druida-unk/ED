const countdownEndDate = new Date("January 1, 2024 00:00:00").getTime();

const formatTime = (time) => (time < 10 ? "0" + time.toString() : time.toString());

const updateTimer = () => {
    const now = new Date().getTime();
    const timeRemaining = countdownEndDate - now;

    const seconds = Math.floor((timeRemaining / 1000) % 60);
    const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    const hours = Math.floor((timeRemaining / 1000 / 60 / 60) % 24);
    const days = Math.floor((timeRemaining / 1000 / 60 / 60 / 24));
    const weeks = Math.floor(days / 7);
    const years = Math.floor(days / 365);

    document.getElementById("timer").innerHTML = `${formatTime(years)}:anos, ${formatTime(weeks % 52)}:semanas, ${formatTime(days % 7)}:dias, ${formatTime(hours)}:horas, ${formatTime(minutes)}:minutos, ${formatTime(seconds)}:segundos`;

    setTimeout(updateTimer, 1000);
};

updateTimer();

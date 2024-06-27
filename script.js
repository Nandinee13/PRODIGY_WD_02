
let seconds = 0;
        let tens = 0;
        let mins = 0;
        let getSeconds = document.querySelector('.seconds');
        let getTens = document.querySelector('.tens');
        let getMins = document.querySelector('.mins');
        let btnToggle = document.querySelector('.btn-toggle');
        let btnLap = document.querySelector('.btn-lap');
        let btnReset = document.querySelector('.btn-reset');
        let lapBox = document.querySelector('.lap-box');
        let interval;
        let isRunning = false;

        btnToggle.addEventListener('click', () => {
            if (isRunning) {
                clearInterval(interval);
                btnToggle.textContent = 'Start';
            } else {
                clearInterval(interval);
                interval = setInterval(startTimer, 10);
                btnToggle.textContent = 'Stop';
            }
            isRunning = !isRunning;
        });

        btnLap.addEventListener('click', () => {
            if (isRunning) {
                const lapTime = `${getMins.textContent}:${getSeconds.textContent}:${getTens.textContent}`;
                const lapItem = document.createElement('div');
                lapItem.textContent = lapTime;
                lapBox.appendChild(lapItem);
            }
        });

        btnReset.addEventListener('click', () => {
            clearInterval(interval);
            tens = 0;
            seconds = 0;
            mins = 0;
            getSeconds.textContent = '00';
            getTens.textContent = '00';
            getMins.textContent = '00';
            lapBox.innerHTML = '';
            btnToggle.textContent = 'Start';
            isRunning = false;
        });

        function startTimer() {
            tens++;
            if (tens <= 9) {
                getTens.textContent = '0' + tens;
            } else {
                getTens.textContent = tens;
            }
            if (tens > 99) {
                seconds++;
                getSeconds.textContent = '0' + seconds;
                tens = 0;
                getTens.textContent = '00';
            }
            if (seconds > 9) {
                getSeconds.textContent = seconds;
            }
            if (seconds > 59) {
                mins++;
                getMins.textContent = '0' + mins;
                seconds = 0;
                getSeconds.textContent = '00';
            }
            if (mins > 9) {
                getMins.textContent = mins;
            }
        }

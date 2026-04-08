/* ── Solara Executor — Download Redirect Script ───────────── */

(function () {
  // ── CONFIG ────────────────────────────────────────────────
  // Replace this URL with your actual download link
  var DOWNLOAD_URL = "PASTE_YOUR_DOWNLOAD_LINK_HERE";
  var COUNTDOWN_SEC = 5; // seconds before redirect (3–5 recommended)
  // ──────────────────────────────────────────────────────────

  var timerEl      = document.getElementById("timer");
  var countdownEl  = document.getElementById("countdown");
  var progressFill = document.getElementById("progressFill");
  var downloadBtn  = document.getElementById("downloadBtn");

  // Update the download button href to the real link
  if (downloadBtn) {
    downloadBtn.href = DOWNLOAD_URL;
    // Also fix the "Try again" anchor
    document.querySelectorAll('a[href="PASTE_YOUR_DOWNLOAD_LINK_HERE"]').forEach(function (a) {
      a.href = DOWNLOAD_URL;
    });
  }

  var remaining = COUNTDOWN_SEC;
  var elapsed   = 0;

  // Kick off progress bar on next frame so the CSS transition plays
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      if (progressFill) {
        progressFill.style.width = "100%";
      }
    });
  });

  var interval = setInterval(function () {
    remaining -= 1;
    elapsed   += 1;

    if (timerEl)     timerEl.textContent     = remaining + "s";
    if (countdownEl) countdownEl.textContent = remaining;

    if (remaining <= 0) {
      clearInterval(interval);

      // Trigger download / redirect
      window.location.href = DOWNLOAD_URL;
    }
  }, 1000);
})();

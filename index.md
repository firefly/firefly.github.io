---
layout: default
title: Home
---


<section class="hero">
  <div class="firefly-container">
    <!-- fireflies will be generated with CSS -->
    <div class="firefly-container">
      <div class="firefly yellow"></div>
      <div class="firefly pink"></div>
      <div class="firefly purple"></div>
      <div class="firefly yellow"></div>
      <div class="firefly pink"></div>
      <div class="firefly purple"></div>
      <div class="firefly yellow"></div>
      <div class="firefly pink"></div>
      <div class="firefly purple"></div>
      <div class="firefly green"></div>
      <div class="firefly green"></div>
      <div class="firefly green"></div>
    </div>
  </div>

  <div class="hero-inner">
    <h1>Open-source, open-hardware</h1>
    <p>Firefly is a crypto-native device for Ethereum<br />Designed to be modified and customized</p>
    <div class="hero-ctas">
      <a href="https://github.com/firefly" class="btn btn-orange">View on Github</a>
      <a href="https://futurealisha.notion.site/235286cca4d880728949f6beab193729" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Get a Firefly</a>
    </div>
    <code class="install">➜ see you IRL at DevConnect 2025</code>
  </div>
</section>


<section class="features">
  <h2>Built for Ethereum developers</h2>
  <div class="feature-grid">
    <div class="feature">
      <h3>Open Everything</h3>
      <p>Hardware, firmware, bootloader, design files — all open source and ready to be customized</p>
    </div>
    <div class="feature">
      <h3>Run Custom Firmware</h3>
      <p>Modify Firefly to run your own logic — perfect for prototyping dapps or tools.</p>
    </div>
    <div class="feature">
      <h3>Human-readable Call Data</h3>
      <p>Use Firefly to securely execute Ethereum transactions or sign messages.</p>
    </div>
  </div>
</section>

<div class="section-wrapper">
<section class="device">
  <div class="device-info">
    <h2>The Firefly Pixie DevKit</h2>
    <p>A compact hardware device for signing transactions, attestations, and games.</p>
    <ul>
      <li>🧠 Open-source firmware</li>
      <li>🛠️ Flashable via USB-C</li>
      <li>🎮 Small, durable form factor</li>
      <li>🔒 Built for secure signing</li>
    </ul>
    <a href="https://futurealisha.notion.site/235286cca4d880728949f6beab193729" target="_blank" rel="noopener noreferrer" class="btn btn-orange devkit-button">
      Request a free Firefly DevKit
    </a>
  </div>

  <div class="device-image">
    <div class="pixie-image-wrapper">
      <img src="/assets/images/ff-crop-real.png" alt="Firefly Pixie DevKit in use" />
    </div>
  </div>
</section>
</div>

<section class="how-it-works">
  <div class="how-wrapper">
    <div class="demo-video square-gif">
      <img src="/assets/videos/ff-flash-demo-sq.gif" alt="Firefly demo animation" />
    </div>
    <div class="steps-column">
      <h2>Getting Started</h2>
      <div class="step-block">
        <div class="step-num">1</div>
        <div>
          <h3>Connect your Firefly</h3>
          <p>Connect via USB-C and access your Firefly from your browser on  
            <a href="https://firefly.box/flash" target="_blank">firefly.box/flash</a>.
          </p>
        </div>
      </div>
      <div class="step-block">
        <div class="step-num">2</div>
        <div>
          <h3>Flash Your Firmware</h3>
          <p>Use the Firefly Flasher to select and install the latest Firefly firmware in seconds.</p>
        </div>
      </div>
      <div class="step-block">
        <div class="step-num">3</div>
        <div>
          <h3>Start Signing</h3>
          <p>Sign transactions and messages, play games, build dapps, or launch your own Ethereum-native tools.</p>
        </div>
      </div>
    </div>
  </div>
</section>



<div class="cta-box">
  <p>✨ Want your own Firefly?</p>
  <p>
    We’re giving away Firefly DevKits to Ethereum developers — find us at Ethereum conferences.<br/>  
    <a href="https://futurealisha.notion.site/235286cca4d880728949f6beab193729" class="cta-link" target="_blank" rel="noopener noreferrer">
  Request a free Firefly DevKit
    </a>
  </p>
</div>




<script>
  document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
      const parent = question.closest('.faq-item');
      parent.classList.toggle('active');
    });
  });
</script>


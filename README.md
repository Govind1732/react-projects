
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Self Serve</title>
    
</head>
<header>
        
    <img src="/static/css/images/verizon-red-icon-black%20(1).png" id="left-image1" alt="Left image 1">
    <img src="/static/css/images/DQaaSlogo%20(1)%20(1).png" id="left-image2" alt="Left image 2">
    <img class="right-img" src="/static/css/images/beta3%20(2)%20(1).png" alt="Right image">

    <nav>
        <h2>Data Quality as a Service</h2>
    </nav>
</header>

<style>
    @font-face {
        font-family: "v-NHaasGrotesk-font";
        src: url("/static/fonts/NHaasGroteskTXW01-75Bd.ttf") format("truetype");
    }
    body {
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    section {
        /* display: flex; */
        max-width: 800px;
        width: 100%;
        box-shadow: 0 0 20px rgba(0,0,0,0.1);
        overflow: hidden;
        border-radius: 15px;
        background-color: #fff;
    }
    
    .tabs {
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
    }
    .tab {
        padding: 50px;
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
        background-color: #1c1c1c;
        color: #fff;
        margin: 10px;
        border-radius: 20px;
    }
    .tab:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 20px rgba(0,0,0,0.2);
    }
    .tab h2 {
        color: #fff;
        font-family: "v-NHaasGrotesk-font";
        font-size: 20px;
    }

    h2 {
        font-size: 25px; 
        font-family: "v-NHaasGrotesk-font";
    }

    header {
        background-color: #000000;
        /* overflow: hidden; */
        color: #ffffff;
        text-align: center;
        font-family: "v-NHaasGrotesk-font";
        width: 100%;
    }

    header img#left-image1 {
        float: left;
        margin-left: 0px;
        width: 75px;
        height: auto;
        margin-top: 30px;
    }
    header img#left-image2 {
        float: left;
        margin-left: -40px;
        width: 150px;
        height: auto;
        margin-top: 5px;
    }
    header img.right-img {
        width: 45px;
        height: auto;   
        float: right;
        margin-right: 10px;
        margin-top: 10px;
    }
    header nav {
        float: none;
        text-align: center;
        margin-top: 50px;
       
        
    }
    header a {
        color: #ffffff;
        font-weight: bold;
        margin: 0 15px;
        text-decoration: none;
        text-align: center;
    }

    footer {
        font-family: "v-NHaasGrotesk-font";
        background-color: #000000;
        color: #ffffff;
        text-align: center;
        padding: 35px 0;
        margin-top: auto;
        width: 100%;
        align-items: center;
        font-weight: bold;
    
        
        
    }
    footer img {
        width: 80px;
        height: auto;
        float:left;
        
    }
    footer a {
        font-family: "v-NHaasGrotesk-font";
        color: #ffffff;
        /* flex-grow: 1; */
        margin: 0 10px;
        text-decoration: none;
        text-align: center;
        /* margin-bottom: 10px; */
        white-space: nowrap;
    }

     label {
        color: #555;
        font-size: 14px;
    }
    input {
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 14px;
        transition: border-color 0.3s ease;
    } 
</style>
<body>
    
        <div class="tabs">
            <div class="tab" onclick="redirectToUrl('selfserve_onecorp_form');">
                <h2>Self Serve OneCorp</h2>
            </div>
			
			<div class="tab" onclick="redirectToUrl('selfserve_dtran_form');">
                <h2>Self Serve DTRAN</h2>
            </div>

            <div class="tab" onclick="redirectToUrl('selfserve_mle_form');">
                <h2>DEI & Other projects</h2>
            </div>

            <div class="tab" onclick="redirectToUrl('ml_profiler_config_form');">
                <h2>ML Profiler</h2>
            </div>
        </div>
        <script>
            function redirectToUrl(endpoint) {
                window.location.href = endpoint;
            }
        </script>
        <footer>
            <div id="footer img">
                <img src="/static/css/images/verizon.png" alt="footer image" width="50" height="50"> 
            </div>
            <!-- <div class="knowledge-base" id="footer a">
                <a href="https://oneconfluence.verizon.com/display/AIDDGA/DQaaS+Onboarding+Process" target=_blank" rel="noopener noreferrer">Explore more about DQaaS</a>
            </div> -->
            <div class="contact-us" id="footer a">
                For more details contact:<a href="mailto:DQ-DEV-Team@verizon.com">DQ-DEV-Team@verizon.com</a>
            </div> 
            <!-- <nav>
                
                <a href="https://oneconfluence.verizon.com/display/AIDDGA/DQaaS+Onboarding+Process"target=_blank" rel="noopener noreferrer">Explore more about DQaaS</a>
                <a href="mailto:DQ-DEV-Team@verizon.com"target="_blank" rel="noopener noreferrer">ConDQ-DEV-Team@verizon.com</a>
            </nav> -->
        </footer>
</body>
</html>

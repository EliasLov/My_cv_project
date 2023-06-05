<script>
export default {
  mounted() {
    const hoverableItems = this.$el.querySelectorAll('.hoverable')
    const hoverTextBox = this.$el.querySelector('.hover_text_box')

    hoverableItems.forEach((item) => {
      item.addEventListener('mouseover', () => {
        hoverTextBox.style.display = 'block'
      })

      item.addEventListener('mouseout', () => {
        hoverTextBox.style.display = 'none'
      })
    })
  }
}
</script>

<template>
  <div class="cv">
    <div class="container_left">
      <div class="small_text_box">
        <h3>Contact</h3>
        <hr />
        <div class="contact">
          <font-awesome-icon icon="fa-solid fa-phone" />
          +46 76-7873347
        </div>

        <div class="contact">
          <font-awesome-icon icon="fa-solid fa-envelope" />
          lovdinger1998@live.se
        </div>

        <div class="contact">
          <font-awesome-icon icon="fa-solid fa-city" />
          Baggens Gränd 32, Varberg
        </div>

        <div class="contact">
          <font-awesome-icon icon="fa-solid fa-link" />
          <a href="https://www.linkedin.com/in/elias-l%C3%B6vdinger-86426615b/" target="_blank">
            Linkedin (link)</a
          >
        </div>
        <br />
        <div class="small_text_box">
          <h3>Educations</h3>
          <hr />
          <ul>
            <li>App Workshop med Henrik Willstedt - Varberg</li>
            <li class="hoverable">Systemutveckling.NET - Campus Varberg (Hover me)</li>
            <div class="hover_text_box">
              Kurser:
              <ul>
                <li>Webbutveckling frontend</li>
                <li>Avancerad .NET</li>
                <li>Databasutveckling och databasadministration</li>
                <li>Agil systemutveckling</li>
                <li>Objektorienterad programmering</li>
                <li>Utveckling med C# och .NET</li>
                <li>Systemtestning</li>
                <li>Avancerad systemutveckling ASP .NET</li>
                <li>LIA 1 Grundläggande systemutveckling (Fast track solutions)</li>
                <li>LIA 2 Avancerad systemutveckling (Fast track solutions)</li>
                <li>Examensarbete</li>
              </ul>
            </div>

            <li>
              Gymnasiet Peder skrivare skola - VVS- och fastighetsprogrammet med inriktning Kyl -
              och värmepumpsteknik
            </li>
            <li>Grundskolan – Lindbergs Skola</li>
          </ul>
        </div>

        <div class="small_text_box">
          <h3>Tech Stack</h3>
          <hr />
          <ul>
            <h4>Backend:</h4>
            <li>C# (mid-level)</li>
            <li>Go (mid-level / advanced)</li>
            <li>MSSQL (mid-level)</li>
            <li>MySQL (mid-level)</li>
            <li>.NET (mid-level)</li>
            <li>gRPC (mid-level)</li>
            <li>RabbitMQ (basic)</li>

            <h4>Frontend:</h4>
            <li>Html (advanced)</li>
            <li>CSS (Advanced)</li>
            <li>JavaScript (mid-level)</li>
            <li>TypeScript (basic)</li>
            <li>Vue (mid-level / advaneced)</li>
            <li>Angular (basic)</li>
            <li>React (basic)</li>
            <li>Vitest (basic)</li>

            <h4>Other:</h4>
            <li>Agile (mid-level)</li>
            <li>Github (mid-level / advanced)</li>
            <li>Figma (basic)</li>
          </ul>
        </div>
      </div>
    </div>

    <hr width="1" size="1150" style="0 auto" />

    <div class="container_center">
      <div class="main_text_box">
        <h2>Work Experience</h2>
        <hr />
        <h4>LIA – Fast Track Solutions – Varberg – 2022 Höst – 2023 Vår / Sommar</h4>
        <p class="small">
          Under hela lia perioden fick jag som uppgift att bygga ett felhanteringssystem för
          företagets CRM-produkt. Under projektets gång fick jag möjlighet att arbeta med en rad
          teknologier, inklusive:
          <br />
          MySQL, Go, gRPC, RabbitMQ, Terraform, Vue, JavaScript, TypeScript, HTML, CSS och Vitest.
        </p>

        <h4>Kundsupport privat – Mediateknik, Varberg – 2019 --></h4>
        <p class="small">
          Min uppgift som Kundsupport är att ta emot samtal från kunder som har abonnemangsfrågor
          eller tekniska frågor kring deras tjänst/tjänster hos Mediateknik. Även felsökning utav
          utrustning som är köpt hos oss så som routrar.
        </p>

        <h4>Kundtjänsthandläggare – Arvator Bertelsmann – 2017 – 2019</h4>
        <p class="small">
          Mina uppgifter som kundtjänsthandläggare var att hjälpa kunder med fakturafrågor. Jag
          lärde även upp nya medarbetare som kom in i företaget
        </p>

        <h4>Ryckare – Varbergs Stadshotell – 2017 – 2017</h4>
        <p class="small">Mitt ansvar var att förbereda rummen för städerskorna.</p>

        <h4>Praktik i samband med gymnasieutbildning – 2015 – 2017</h4>
        <p class="small">
          (VVS- och fastighetsprogrammet med inriktning Kyl- och värmepumpsteknik)
        </p>
      </div>
      <hr />
      <div class="main_text_box">
        <h2>Other</h2>
      </div>
    </div>
  </div>
</template>

<style>
.cv {
  background-color: rgb(218, 218, 218);
  display: flex;
  max-width: 90rem;
}
.container_left {
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin: 1rem;
}
.container_center {
  flex-direction: column;
  margin: 1rem;
}

.small_text_box {
  width: 15rem;
}

.contact {
  margin-top: 15px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 10px;
  list-style-type: circle;
  font-size: 12px;
}
ul li {
  margin-top: 10px;
}

.small {
  font-size: 15px;
}

.hover_text_box {
  display: none;
  padding: 10px;
  background-color: rgb(192, 192, 192);
}
</style>

document.addEventListener("DOMContentLoaded", () => {
    const homePembukaan = document.querySelector(".home-pembukaan");

    setTimeout(() => {
        homePembukaan.classList.add("hidden");
    }, 6000);
});

window.addEventListener("load", function () {
    function updateOnlineStatus() {
        var statusOffline = document.querySelector(".home-koneksi-internet");
        var homePembukaan = document.querySelector(".home-pembukaan");
        var homePembukaan2 = document.querySelector(".home-pembukaan-2");

        if (navigator.onLine) {
            statusOffline.style.display = "none";
            homePembukaan.style.display = "grid";
            homePembukaan2.style.display = "grid";
        } else {
            statusOffline.style.display = "grid";
            homePembukaan.style.display = "none";
            homePembukaan2.style.display = "none";
        }
    }

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);
    updateOnlineStatus();
});

function refreshPage() {
    if (navigator.onLine) {
        location.reload();
    } else {
        var statusOffline = document.querySelector(".home-koneksi-internet");
        var homePembukaan = document.querySelector(".home-pembukaan");
        var homePembukaan2 = document.querySelector(".home-pembukaan-2");

        statusOffline.style.display = "grid";
        homePembukaan.style.display = "none";
        homePembukaan2.style.display = "none";
    }
}

function howToPageBegining() {
    const homePembukaan2 = document.querySelector(".home-pembukaan-2");
    homePembukaan2.style.display = "grid";
    homePembukaan2.classList.add("clearPembukaan2");

    const headerTop = document.querySelector(".header-top");
    headerTop.classList.add("showHeaderTop");
    headerTop.classList.remove("backHeaderTop");

    const homePageBegining = document.querySelector(".home-page-begining");
    homePageBegining.classList.add("ShowHome");

    const boxInformation = document.querySelector(".box-information");
    boxInformation.classList.add("showButtonInformation");

    const tabelKerja = document.querySelector(".tabel-jadwal-kerja");
    tabelKerja.classList.add("showTableKerja");

    const HomeFooter = document.querySelector(".home-footer");
    HomeFooter.classList.add("showHomeFooter");
}

let scrollPosition = 0;

function openHomecuciAc() {
    const showHomeCuciAc = document.querySelector(".home-cuci-ac");
    scrollPosition = window.scrollY;
    document.body.style.overflow = "hidden"
    showHomeCuciAc.style.display = "grid";
    showHomeCuciAc.classList.add("showHomeCuciAc");
    showHomeCuciAc.classList.remove("backHomeCuciAc");
    showHomeCuciAc.scrollTop = 0;

    const headerTop = document.querySelector(".header-top");
    headerTop.classList.add("backHeaderTop");
    headerTop.classList.remove("showHeaderTop");

    const boxInformation = document.querySelector(".box-information");
    boxInformation.classList.remove("showButtonInformation");

    const showContainerBoxabout = document.querySelector(".container-Boxabout");
    showContainerBoxabout.classList.add("showBoxabout");
}

function clearHomeCuciAc() {
    const showHomeCuciAc = document.querySelector(".home-cuci-ac");
    showHomeCuciAc.style.display = "grid";
    showHomeCuciAc.classList.add("backHomeCuciAc");
    showHomeCuciAc.classList.remove("showHomeCuciAc");

    showHomeCuciAc.addEventListener("animationend", () => {
        if (!showHomeCuciAc.classList.contains("showHomeCuciAc")) {
            showHomeCuciAc.style.display = "none";
            document.body.style.overflow = "auto";
            window.scrollTo(0, scrollPosition);
        }
    }, { once: true });

    const headerTop = document.querySelector(".header-top");
    headerTop.classList.add("showHeaderTop");
    headerTop.classList.remove("backHeaderTop");

    const boxInformation = document.querySelector(".box-information");
    boxInformation.classList.add("showButtonInformation");
}

function openHomeService() {
    const showHomeService = document.querySelector(".home-service");
    scrollPosition = window.scrollY;
    document.body.style.overflow = "hidden";
    showHomeService.style.display = "grid";
    showHomeService.classList.add("showHomeService");
    showHomeService.classList.remove("backHomeService");
    showHomeService.scrollTop = 0;

    const headerTop = document.querySelector(".header-top");
    headerTop.classList.add("backHeaderTop");
    headerTop.classList.remove("showHeaderTop");

    const boxInformation = document.querySelector(".box-information");
    boxInformation.classList.remove("showButtonInformation");

    const showContainerService = document.querySelector(".container-home-about-service");
    showContainerService.classList.add("showAboutService");
}

function clearHomeService() {
    const showHomeService = document.querySelector(".home-service");
    showHomeService.classList.add("backHomeService");
    showHomeService.classList.remove("showHomeService");

    showHomeService.addEventListener("animationend", () => {
        if (!showHomeService.classList.contains("showHomeService")) {
            showHomeService.style.display = "none";
            document.body.style.overflow = "auto";
            window.scrollTo(0, scrollPosition);
        }
    }, { once: true });

    const headerTop = document.querySelector(".header-top");
    headerTop.classList.add("showHeaderTop");
    headerTop.classList.remove("backHeaderTop");

    const boxInformation = document.querySelector(".box-information");
    boxInformation.classList.add("showButtonInformation");
}

function openHomePesanJasa() {
    const homePesanJasa = document.querySelector(".home-pesan-jasa");
    scrollPosition = window.scrollY;
    document.body.style.overflow = "hidden";
    homePesanJasa.style.display = "grid";
    homePesanJasa.classList.add("showHomePesanJasa");
    homePesanJasa.classList.remove("backHomePesanJasa");
    homePesanJasa.scrollTop = 0;

    const headerTop = document.querySelector(".header-top");
    headerTop.classList.add("backHeaderTop");
    headerTop.classList.remove("showHeaderTop");

    const formAc = document.querySelector(".form-ac");
    formAc.classList.add("showFormAc");

    const formService = document.querySelector(".form-service");
    formService.classList.add("showFormService")

    const boxInformation = document.querySelector(".box-information");
    boxInformation.classList.remove("showButtonInformation");
}

function clearHomePesanJasa() {
    const homePesanJasa = document.querySelector(".home-pesan-jasa");
    homePesanJasa.style.display = "grid";
    homePesanJasa.classList.add("backHomePesanJasa");
    homePesanJasa.classList.remove("showHomePesanJasa");

    homePesanJasa.addEventListener("animationend", () => {
        if (!homePesanJasa.classList.contains("showHomePesanJasa")) {
            homePesanJasa.style.display = "none";
            document.body.style.overflow = "auto";
            window.scrollTo(0, scrollPosition);
        }
    }, { once: true })

    const headerTop = document.querySelector(".header-top");
    headerTop.classList.add("showHeaderTop");
    headerTop.classList.remove("backHeaderTop");

    const boxInformation = document.querySelector(".box-information");
    boxInformation.classList.add("showButtonInformation");
}

document.getElementById('form-ac').addEventListener("submit", function (event) {
    event.preventDefault();

    const jasa = "AC"
    let sewaJasa = '';

    document.querySelectorAll(".input-radio").forEach((radio) => {
        if (radio.checked) {
            sewaJasa = radio.value;
        }
    });

    const keluhanLain = document.querySelector("#form-ac .label-1 + input").value;
    const kuantitas = document.querySelector("#form-ac .label-2 + input").value;
    const atasNama = document.querySelector("#form-ac .label-3 + input").value;
    const alamat = document.querySelector("#form-ac .label-4 + input").value;

    const pesan = `jasa: ${jasa}\nsewa jasa: ${sewaJasa}\nkeluhan lain: ${keluhanLain}\nkuantitas: ${kuantitas}\natas nama: ${atasNama}\nalamat: ${alamat}`;

    const whatsappLink = `https://wa.me/+6285774546860?text=${encodeURIComponent(pesan)}`;

    window.open(whatsappLink, '_blank');

    document.getElementById('form-ac').reset();
});

document.querySelectorAll(".container-input-jasa-ac").forEach((containerInputAc) => {
    containerInputAc.addEventListener("click", function () {
        const InputTextNumberAC = containerInputAc.querySelector("input");
        if (InputTextNumberAC) {
            InputTextNumberAC.focus();
        }
    });
});

document.querySelectorAll(".container-input-jasa-service").forEach((containerInputService) => {
    containerInputService.addEventListener("click", function () {
        const InputTextNumberService = containerInputService.querySelector("input");
        if (InputTextNumberService) {
            InputTextNumberService.focus();
        }
    });
});

document.getElementById('form-service').addEventListener("submit", function (event) {
    event.preventDefault();

    const jasaService = "Service"

    const namaBaranngService = document.querySelector("#form-service .label-1 + input").value;
    const keluhanLainService = document.querySelector("#form-service .label-2 + input").value;
    const kuantitasService = document.querySelector("#form-service .label-3 + input").value;
    const atasNamaService = document.querySelector("#form-service .label-4 + input").value;
    const alamatService = document.querySelector("#form-service .label-5 + input").value;

    const pesan = `jasa: ${jasaService}\nnama Barang: ${namaBaranngService}\nkeluhan lain: ${keluhanLainService}\nkuantitas: ${kuantitasService}\natas nama: ${atasNamaService}\nalamat: ${alamatService}`;

    const whatsappLink = `https://wa.me/+6285774546860?text=${encodeURIComponent(pesan)}`;

    window.open(whatsappLink, '_blank');

    document.getElementById('form-service').reset();
})
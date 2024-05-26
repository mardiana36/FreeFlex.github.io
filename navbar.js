document.write(`
<nav class="container-nav">
<div>
    <div class="div-nav">
        <ul class="card-nav none">
            <li><a id="logo" href="index.html">FreeFlex</a></li>
            <li class="li-input">
                <form action="" id="search">
                    <input class="input-nav" type="search" name="cari" placeholder="Cari jasa atau freelancer...">
                    <button form="search" class="tombol-searchNav"><i class='bx bx-search-alt icon-search' ></i></button>
                </form>
            </li>
            <li><a href="lihatJob.html">Lihat job</a></li>
            <li>
                <a href="katagoriJasa.html">Katagori Jasa</a>
            </li>
        </ul>
        <ul class="card-nav none">
            <li><a href="login.html">Login</a></li>
            <li id="daftar">
                <a class="color-biruMuda">Daftar</a>
                <ul id="drop-daftar">
                    <li><a href="daftarClient.html">Daftar Sebagai Klien</a></li>
                    <li><a href="daftarFreelancer.html">Daftar Sebagai Freelancer</a></li>
                </ul>
            </li>
            <li><a class="pasang-job" href="pasangJob.html">Pasang Job</a></li>
        </ul>
        <ul class="card-nav mobile">
            <li>
                <button id="menu"><i class='bx bx-menu'></i></button>
                <button id="close-menu"><i class='bx bx-window-close'></i></button>
                <ol class="drop-mobile">
                    <li class="li-input">
                        <form action="" id="search">
                            <input class="input-nav" type="search" name="cari"
                                placeholder="Cari jasa atau freelancer...">
                            <button form="search" class="tombol-searchNav"><i class='bx bx-search-alt icon-search' ></i></button>
                        </form>
                    </li>
                    <li class="login"><a href="login.html">Login</a></li>
                    <li id="daftar-mobile">
                        <a>Daftar <span id="more-nav">&#129175; </span></a>
                        <ul id="drop-daftar-mobile">
                            <li><a href="daftarClient.html">Daftar Sebagai Klien</a></li>
                            <li><a href="daftarFreelancer.html">Daftar Sebagai Freelancer</a></li>
                        </ul>
                    </li>
                    <li><a href="lihatJob.html">Lihat job</a></li>
                    <li>
                        <a href="katagoriJasa.html">Katagori Jasa</a>
                    </li>

                </ol>
            </li>
            <li><a id="logo" href="index.html">FreeFlex</a></li>
            <li><a class="pasang-job" href="pasangJob.html">Pasang Job</a></li>
        </ul>
        </div>
    </div>
</nav>
`);

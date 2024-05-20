class Footer extends HTMLElement{
    constructor(){
        super();

        this.innerHTML = `
		<footer class="">
			<div class="container">
				<div class="footer-cont">
					<div class="logo">
						<a href="./index.html">
						
						</a>
					</div>
					<div class="footer-nav">
						<div class="fn-left">
							<p>ŞİRKƏT</p>
							<div>
								<a href="">Haqqında</a>
							</div>
							<div>
								<a href="">Works</a>
							</div>
							<div>
								<a href="">Record üçün</a>
							</div>
						</div>
						<div class="fn-mid">
							<p>İCMALAR</p>
							<div>
								<a href="">Artistlər üçün</a>
							</div>
							<div>
								<a href="">Tərtibatçılar</a>
							</div>
							<div>
								<a href="">Reklam</a>
							</div>
							<div>
								<a href="">İnvestorlar</a>
							</div>
							<div>
								<a href="">Satıcılar</a>
							</div>
						</div>
						<div class="fn-right">
							<p>FAYDALI LİNKLƏR</p>
							<div>
								<a href="./help.html">Kömək edin</a>
							</div>
							<div>
								<a href="./Spotify-songs/songs.html">Veb Player</a>
							</div>
							<div>
								<a href=""
									>Pulsuz Mobil 
									<br/>
								PROQRAM </a>
							</div>
						</div>
					</div>
					<div class="social">
						<ul>
							<li>
								<a href=""><span class="insta"></span></a>
							</li>
							<li class="center">
								<a href=""><span class="twitter"></span></a>
							</li>
							<li>
								<a href=""><span class="face"></span></a>
							</li>
						</ul>
					</div>
					<div class="tr">
						<a href="" class="">
							AZƏRBAYCAN
							<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAkFBMVEUAmMMArmXgADT///8An8vqACDqAC8AtmjgAC/gADLfACrfACjfACzgADDeABXeABjeAB7fACLeABznWW/97/Lreor3ydDdAADpaHv52d/ztr/mUGf63+P52t/40tjkOFfqdIPth5b+9/nqcILoYHXwoq3hCzrsgpLmSmP2xczujpvjNlPiGkLjK0zzsbvyp7MAd5/7AAADyUlEQVR4nO3b2VLiQBSAYYbMks6+AIIgi4gSRHz/txuiYwIIAeZM2Weq/u/KKnOR+quT7jRJqwUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAPfYdA6wcEWm11jHEDzwtcY2yfyXna8oV+krQn+XSaTx7TzA9tn88ZqvIZP17Pio7zR6e3eol91WNQUz4/6g6cA6NZojmgnnxu/NQ5jFe6X2Wu7XM7SU2+9OVg5HV6RVGM78sROEltn90pSvKZeL6XbpGbKEuSJIvX843jzCKlF7COfCZ63Yk3zqM0+OgVemk6c3qxzn4q8pms2Bl5eRQc/NuPFnc6JxAV+aLbut5t5n0+wKTPG1djPw35skVd7+nEXc5t9zXOvwryecO63kNy6ihjHt//UFXRfj7j3Vf15udXKO4wOHvM17GfL6kn3UV8/vCoEyq6CVrPF77UD2gXrO6CoTM9MrfYYj1fUs+6k6bbmvf+z/R2uwZ8+8v1v+DszrGdz4T1kqXp0vVWw3I5aJLtjfIxLJ+QJysF/Wzn85+qfM9Ng89dlg8jntffHjjzg2jZcx4UzCG282Xjj3p3zfNG3NveHPs35ePJ3U0+KO+UX3SKTSznM1k1+GbN12LwtjocvS1y3vZm5hpmEMv5grzKtz6zMR/tb2h1NAw+2/n81cU5dkqXugomDuv50mrZMs6ajzTezd3u4LtRsQVjOV/S++ixaXpeM0HizXt7o2/cDTPPekHL+bJqRC0a8rlJfut8VvRT22sXy/ni0QX5wuXR35C27nPL+y+2R9/ggnyMvlMy7n0SV828uws/Zt4S6z4RnjpETFz14Jn3L9Q7LgN2XK7Hfp/Izm5zwW7z9ZJN1W/ZNJz4reOo639pUzFn/GE93/W/82p62cV+PpPWGwL9C94yaLzEv5r9fO1gWS+Gecflesmq7tc99YaVyTV+pKAh30Xv971quuVVVOQz8c5m1LG3S+PFQMUGyycq8h282zzYf7c5yXi3+QwTT/e2UxbDdvlmfRbH6/n2yl4praclX/ldx9jZ0xkXRW/Adx0XCqP50V+EOt1I1Vplj55828faaDo6jDd6ijU8256iKd824OEXlc+Rzhn3g658fM8r9199Tf4TAq1fEGh9gwD5RMgnQj4R8omQT4R8IuQTIZ8I+UTIJ0I+EfKJkE+EfCLkEyGfCPlEyCdCPhHyiZBPhHwi5BMhnwj5RMgnQj4R8omQT4R8IuQTIZ8I+UTIJ0I+EfKJkE+EfCLkEyGfCPlEyCdCPhHyiZBPhHwi5BMhnwj5RMgnQj6R3/O8CmeZuVX9AAAAAElFTkSuQmCC" alt="" class="" />
						</a>
					</div>
					
				</div>
			</div>
		</footer>
        `;
    }
}

window.customElements.define('custom-footer', Footer);
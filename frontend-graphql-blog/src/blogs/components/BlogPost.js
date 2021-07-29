import React from 'react';

import './BlogPost.css';

const BlogPost = (props) => {
	return (
		<div className="c-blog">
			<div className="c-blog__header">
				<h1 className="c-blog__title">{props.title}</h1>
				<h2 className="c-blog__author">{props.author}</h2>
			</div>
			<div className="c-blog__body">
				<div className="c-blog__content">
					<p>{props.content}</p>
				</div>

				<div className="c-blog-details">
					<div className="c-blog-details__date-created">
						<div className="c-blog-details__date-created-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512">
								<path d="M493.26 56.26l-37.51-37.51C443.25 6.25 426.87 0 410.49 0s-32.76 6.25-45.25 18.74l-74.49 74.49L256 127.98 12.85 371.12.15 485.34C-1.45 499.72 9.88 512 23.95 512c.89 0 1.79-.05 2.69-.15l114.14-12.61L384.02 256l34.74-34.74 74.49-74.49c25-25 25-65.52.01-90.51zM118.75 453.39l-67.58 7.46 7.53-67.69 231.24-231.24 31.02-31.02 60.14 60.14-31.02 31.02-231.33 231.33zm340.56-340.57l-44.28 44.28-60.13-60.14 44.28-44.28c4.08-4.08 8.84-4.69 11.31-4.69s7.24.61 11.31 4.69l37.51 37.51c6.24 6.25 6.24 16.4 0 22.63z" />
							</svg>
						</div>
						<div className="c-blog-details__date-created-date">
							<p>{props.datecreated}</p>
						</div>
					</div>
					<div className="c-blog-details__date-edited">
						<div className="c-blog-details__date-edited-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 576 512">
								<path d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z" />
							</svg>
						</div>
						<div className="c-blog-details__date-edited-date">
							<p>{props.dateedited}</p>
						</div>
					</div>

					<div className="c-blog-details__likes">
						<div className="c-blog-details__likes-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512">
								<path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z" />
							</svg>
						</div>
						<div className="c-blog-details__likes-count">
							<p>{props.likes}</p>
						</div>
					</div>

					<div className="c-blog-details__comments">
						<div className="c-blog-details__comments-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 576 512">
								<path d="M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.3 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.2 2.1 18.7 3.7 28.4 4.9C208.1 407.6 281.8 448 368 448c20.8 0 40.8-2.4 59.8-6.8C456.3 459.7 499.4 480 553 480c9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.4-.3-22.5-24.1-37.8-54.8zm-392.8-92.3L122.1 305c-14.1 9.1-28.5 16.3-43.1 21.4 2.7-4.7 5.4-9.7 8-14.8l15.5-31.1L77.7 256C64.2 242.6 48 220.7 48 192c0-60.7 73.3-112 160-112s160 51.3 160 112-73.3 112-160 112c-16.5 0-33-1.9-49-5.6l-19.8-4.5zM498.3 352l-24.7 24.4 15.5 31.1c2.6 5.1 5.3 10.1 8 14.8-14.6-5.1-29-12.3-43.1-21.4l-17.1-11.1-19.9 4.6c-16 3.7-32.5 5.6-49 5.6-54 0-102.2-20.1-131.3-49.7C338 339.5 416 272.9 416 192c0-3.4-.4-6.7-.7-10C479.7 196.5 528 238.8 528 288c0 28.7-16.2 50.6-29.7 64z" />
							</svg>
						</div>
						<div className="c-blog-details__comments-count">
							<p>{props.comments}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="c-blog__footer">
				<div className="c-blog-comments">
					<div className="c-blog-comments__heading">
						<h3 className="c-blog-comments__title">Comments</h3>
					</div>
					<div className="c-blog-comments__body">
						<form action="" className="c-comments-form">
							<div className="c-comments-form__input">
								<textarea
									className="c-comments-form__input-message"
									name="comment-message"
									id=""
									rows="3"></textarea>
							</div>

							<div className="c-comments-form__button">
								<button
									type="submit"
									className="c-comments-form__button-submit">
									Add Comment
								</button>
							</div>
						</form>
					</div>

					<div className="c-blog-comments__messages">
						<ul className="c-blog-comments__messages-items">
							<li className="c-blog-comments__messages-item">
								<p className="c-blog-comments__message">
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Accusantium assumenda odit labore maiores,
									accusamus ipsa ipsum iure adipisci veritatis quod
									quibusdam voluptatem, repellat optio fugit debitis!
									Iusto accusamus sapiente id. Lorem ipsum dolor sit
									amet consectetur adipisicing elit. Accusantium
									assumenda odit labore maiores, accusamus ipsa ipsum
									iure adipisci veritatis quod quibusdam voluptatem,
									repellat optio fugit debitis! Iusto accusamus
									sapiente id.
								</p>
								<div className="c-blog-comments__message-info">
									<div className="c-blog-comments__user-created">
										<div className="c-blog-comments__user-created-icon">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 640 512">
												<path d="M358.9 433.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-41.8 41.8 71.8 71.7 41.8-41.8c9.2-9.3 9.2-24.4-.1-33.8zM223.9 288c79.6.1 144.2-64.5 144.1-144.1C367.9 65.6 302.4.1 224.1 0 144.5-.1 79.9 64.5 80 144.1c.1 78.3 65.6 143.8 143.9 143.9zm-4.4-239.9c56.5-2.6 103 43.9 100.4 100.4-2.3 49.2-42.1 89.1-91.4 91.4-56.5 2.6-103-43.9-100.4-100.4 2.3-49.3 42.2-89.1 91.4-91.4zM134.4 352c14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 16.7 0 32.2 5 45.5 13.3l34.4-34.4c-22.4-16.7-49.8-26.9-79.9-26.9-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h258.3c-3.8-14.6-2.2-20.3.9-48H48v-25.6c0-47.6 38.8-86.4 86.4-86.4z" />
											</svg>
										</div>
										<div className="c-blog-comments__user-created-name">
											<p>Aurora Barnuts</p>
										</div>
									</div>
									<div className="c-blog-comments__date-edited">
										<div className="c-blog-comments__date-edited-icon">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512">
												<path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
											</svg>
										</div>
										<div className="c-blog-comments__date-edited-date">
											<p>January 14, 2012</p>
										</div>
									</div>
								</div>
							</li>

							<li className="c-blog-comments__messages-item">
								<p className="c-blog-comments__message">
									Eveniet cumque ratione alias, fuga quae cupiditate
									quasi perspiciatis, delectus beatae commodi nulla
									sequi ex corporis qui repudiandae! Quibusdam dicta
									corrupti, doloremque sunt repellendus dolores autem
									expedita tempore dolor aspernatur? Laudantium sunt
									natus quas illum eaque, expedita architecto officiis
									qui vel quo eligendi ipsam? Cum iure obcaecati
									aperiam reiciendis enim ea libero architecto
									excepturi ut, dolorum, iusto magni necessitatibus
									dolor. Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Quae voluptas illum explicabo
									inventore, provident adipisci cupiditate pariatur,
									iusto recusandae ipsa odio ipsum deleniti vitae
									possimus eaque odit, animi accusamus quia.
								</p>
								<div className="c-blog-comments__message-info">
									<div className="c-blog-comments__user-created">
										<div className="c-blog-comments__user-created-icon">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 640 512">
												<path d="M358.9 433.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-41.8 41.8 71.8 71.7 41.8-41.8c9.2-9.3 9.2-24.4-.1-33.8zM223.9 288c79.6.1 144.2-64.5 144.1-144.1C367.9 65.6 302.4.1 224.1 0 144.5-.1 79.9 64.5 80 144.1c.1 78.3 65.6 143.8 143.9 143.9zm-4.4-239.9c56.5-2.6 103 43.9 100.4 100.4-2.3 49.2-42.1 89.1-91.4 91.4-56.5 2.6-103-43.9-100.4-100.4 2.3-49.3 42.2-89.1 91.4-91.4zM134.4 352c14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 16.7 0 32.2 5 45.5 13.3l34.4-34.4c-22.4-16.7-49.8-26.9-79.9-26.9-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h258.3c-3.8-14.6-2.2-20.3.9-48H48v-25.6c0-47.6 38.8-86.4 86.4-86.4z" />
											</svg>
										</div>
										<div className="c-blog-comments__user-created-name">
											<p>Aurora Barnuts</p>
										</div>
									</div>
									<div className="c-blog-comments__date-edited">
										<div className="c-blog-comments__date-edited-icon">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512">
												<path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
											</svg>
										</div>
										<div className="c-blog-comments__date-edited-date">
											<p>January 14, 2012</p>
										</div>
									</div>
								</div>
							</li>
							<li className="c-blog-comments__messages-item">
								<p className="c-blog-comments__message">
									Quaerat molestias, ab cum, maiores expedita
									architecto corporis delectus perferendis animi optio
									modi cumque consectetur nulla aspernatur eligendi ad
									eveniet ipsam dolore laboriosam tempore inventore
									alias quasi! Officia, exercitationem nobis. Eveniet
									voluptatibus consectetur, eligendi quos modi
									accusantium odio incidunt dolore magni tenetur labore
									odit non ullam atque voluptatem adipisci impedit
									optio rerum sapiente voluptate laboriosam libero ab
									iure minus! Doloribus!
								</p>
								<div className="c-blog-comments__message-info">
									<div className="c-blog-comments__user-created">
										<div className="c-blog-comments__user-created-icon">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 640 512">
												<path d="M358.9 433.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-41.8 41.8 71.8 71.7 41.8-41.8c9.2-9.3 9.2-24.4-.1-33.8zM223.9 288c79.6.1 144.2-64.5 144.1-144.1C367.9 65.6 302.4.1 224.1 0 144.5-.1 79.9 64.5 80 144.1c.1 78.3 65.6 143.8 143.9 143.9zm-4.4-239.9c56.5-2.6 103 43.9 100.4 100.4-2.3 49.2-42.1 89.1-91.4 91.4-56.5 2.6-103-43.9-100.4-100.4 2.3-49.3 42.2-89.1 91.4-91.4zM134.4 352c14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 16.7 0 32.2 5 45.5 13.3l34.4-34.4c-22.4-16.7-49.8-26.9-79.9-26.9-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h258.3c-3.8-14.6-2.2-20.3.9-48H48v-25.6c0-47.6 38.8-86.4 86.4-86.4z" />
											</svg>
										</div>
										<div className="c-blog-comments__user-created-name">
											<p>Aurora Barnuts</p>
										</div>
									</div>
									<div className="c-blog-comments__date-edited">
										<div className="c-blog-comments__date-edited-icon">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512">
												<path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
											</svg>
										</div>
										<div className="c-blog-comments__date-edited-date">
											<p>January 14, 2012</p>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogPost;

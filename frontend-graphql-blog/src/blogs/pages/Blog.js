import React from 'react';
import RandomTextGenerator from 'random-text-generator';
import randomTitle from 'random-title';

import { useParams } from 'react-router-dom';

import MainBody from '../../shared/components/UIElements/MainBody';
import BlogPost from '../components/BlogPost';
const Blog = (props) => {
	// Create an instance of the generator. Because you want to generate a text you should set the splitter to " " and use a smaller deepness that the default 40 (to save memory and training time). In this case the deepness says how many of previous words determine the following words.
	let randomTextGenerator = new RandomTextGenerator({
		splitter: ' ',
		deepness: 8,
	});

	// Make a string with a long text. Source: https://en.wikipedia.org/wiki/Nineteen_Eighty-Four.
	let exemplaryText = `Nineteen Eighty-Four: A Novel, often published as 1984, is a dystopian novel by English novelist George Orwell. It was published in June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime. The story was mostly written at Barnhill, a farmhouse on the Scottish island of Jura, at times while Orwell suffered from severe tuberculosis. Thematically, Nineteen Eighty-Four centres on the consequences of government over-reach, totalitarianism, and repressive regimentation of all persons and behaviours within society. The story takes place in an imagined future, the year 1984, when much of the world has fallen victim to perpetual war, omnipresent government surveillance, historical negationism and propaganda. Great Britain, known as Airstrip One, has become a province of a superstate named Oceania that is ruled by the Party who employ the Thought Police to persecute individuality and independent thinking. Big Brother, the leader of the Party, enjoys an intense cult of personality despite the fact that he may not even exist. The protagonist, Winston Smith, is a diligent and skilful rank-and-file worker and Party member who secretly hates the Party and dreams of rebellion. He enters a forbidden relationship with a co-worker, Julia. Nineteen Eighty-Four has become a classic literary example of political and dystopian fiction. Many terms used in the novel have entered common usage, including Big Brother, doublethink, thoughtcrime, Newspeak, Room 101, telescreen, 2 + 2 = 5, prole, and memory hole. Nineteen Eighty-Four also popularised the adjective "Orwellian", connoting things such as official deception, secret surveillance, brazenly misleading terminology, and manipulation of recorded history by a totalitarian or authoritarian state. Time included it on its one hundred best English-language novels from 1923 to 2005. It was placed on the Modern Library's 100 Best Novels, reaching No. 13 on the editors' list and No. 6 on the readers' list. In 2003, the novel was listed at No. 8 on The Big Read survey by the BBC. Parallels have been drawn between the novel's subject matter and real life instances of totalitarianism, mass surveillance, and violations of freedom of expression among other themes.`;

	// Pass the exemplaryText to the generator. You should split it at first, because it is a text.
	randomTextGenerator.learn(exemplaryText.split(' '));

	// console.log the generated Lorem Ipsum
	console.log(randomTextGenerator.generate());
	// N
	const title = randomTitle();

	const content = randomTextGenerator.generate();
	const BLOGS = [
		{
			id: 'b1',
			image: 'https://source.unsplash.com/1600x900/?beach',
			title: title,
			author: 'Aurora Barnuts',
			content: content,
			datecreated: 'January 14, 2012',
			dateedited: 'January 14, 2012',
			likes: 100,
			comments: 200,
		},
		{
			id: 'b2',
			image: 'https://source.unsplash.com/1600x900/?mountain',
			title: 'https://baconipsum.com/api/?type=all-meat&sentences=5&start-with-lorem=1',
			author: 'Aurora Barnuts',
			content:
				'https://baconipsum.com/api/?type=all-meat&sentences=50&start-with-lorem=1',
			datecreated: 'January 14, 2012',
			dateedited: 'January 14, 2012',
			likes: 100,
			comments: 200,
		},
		{
			id: 'b3',
			image: 'https://source.unsplash.com/1600x900/?city',
			title: 'https://baconipsum.com/api/?type=all-meat&sentences=5&start-with-lorem=1',
			author: 'Aurora Barnuts',
			content:
				'https://baconipsum.com/api/?type=all-meat&sentences=50&start-with-lorem=1',
			datecreated: 'January 14, 2012',
			dateedited: 'January 14, 2012',
			likes: 100,
			comments: 200,
		},
		{
			id: 'b4',
			image: 'https://source.unsplash.com/1600x900/?space',
			title: 'https://baconipsum.com/api/?type=all-meat&sentences=5&start-with-lorem=1',
			author: 'Aurora Barnuts',
			content:
				'https://baconipsum.com/api/?type=all-meat&sentences=50&start-with-lorem=1',
			datecreated: 'January 14, 2012',
			dateedited: 'January 14, 2012',
			likes: 100,
			comments: 200,
		},
		{
			id: 'b5',
			image: 'https://source.unsplash.com/1600x900/?beach',
			title: 'https://baconipsum.com/api/?type=all-meat&sentences=5&start-with-lorem=1',
			author: 'Aurora Barnuts',
			content:
				'https://baconipsum.com/api/?type=all-meat&sentences=50&start-with-lorem=1',
			datecreated: 'January 14, 2012',
			dateedited: 'January 14, 2012',
			likes: 100,
			comments: 200,
		},
		{
			id: 'b6',
			image: 'https://source.unsplash.com/1600x900/?mountain',
			title: 'https://baconipsum.com/api/?type=all-meat&sentences=5&start-with-lorem=1',
			author: 'Aurora Barnuts',
			content:
				'https://baconipsum.com/api/?type=all-meat&sentences=50&start-with-lorem=1',
			datecreated: 'January 14, 2012',
			dateedited: 'January 14, 2012',
			likes: 100,
			comments: 200,
		},
		{
			id: 'b7',
			image: 'https://source.unsplash.com/1600x900/?city',
			title: 'https://baconipsum.com/api/?type=all-meat&sentences=5&start-with-lorem=1',
			author: 'Aurora Barnuts',
			content:
				'https://baconipsum.com/api/?type=all-meat&sentences=50&start-with-lorem=1',
			datecreated: 'January 14, 2012',
			dateedited: 'January 14, 2012',
			likes: 100,
			comments: 200,
		},
		{
			id: 'b8',
			image: 'https://source.unsplash.com/1600x900/?space',
			title: 'https://baconipsum.com/api/?type=all-meat&sentences=5&start-with-lorem=1',
			author: 'Aurora Barnuts',
			content:
				'https://baconipsum.com/api/?type=all-meat&sentences=50&start-with-lorem=1',
			datecreated: 'January 14, 2012',
			dateedited: 'January 14, 2012',
			likes: 100,
			comments: 200,
		},

		{
			id: 'b9',
			image: 'https://source.unsplash.com/1600x900/?beach',
			title: 'https://baconipsum.com/api/?type=all-meat&sentences=5&start-with-lorem=1',
			author: 'Aurora Barnuts',
			content:
				'https://baconipsum.com/api/?type=all-meat&sentences=50&start-with-lorem=1',
			datecreated: 'January 14, 2012',
			dateedited: 'January 14, 2012',
			likes: 100,
			comments: 200,
		},
		{
			id: 'b10',
			image: 'https://source.unsplash.com/1600x900/?mountain',
			title: 'https://baconipsum.com/api/?type=all-meat&sentences=5&start-with-lorem=1',
			author: 'Aurora Barnuts',
			content:
				'https://baconipsum.com/api/?type=all-meat&sentences=50&start-with-lorem=1',
			datecreated: 'January 14, 2012',
			dateedited: 'January 14, 2012',
			likes: 100,
			comments: 200,
		},
		{
			id: 'b11',
			image: 'https://source.unsplash.com/1600x900/?city',
			title: 'https://baconipsum.com/api/?type=all-meat&sentences=5&start-with-lorem=1',
			author: 'Aurora Barnuts',
			content:
				'https://baconipsum.com/api/?type=all-meat&sentences=50&start-with-lorem=1',
			datecreated: 'January 14, 2012',
			dateedited: 'January 14, 2012',
			likes: 100,
			comments: 200,
		},
		{
			id: 'b12',
			image: 'https://source.unsplash.com/1600x900/?space',
			title: 'https://baconipsum.com/api/?type=all-meat&sentences=5&start-with-lorem=1',
			author: 'Aurora Barnuts',
			content:
				'https://baconipsum.com/api/?type=all-meat&sentences=50&start-with-lorem=1',
			datecreated: 'January 14, 2012',
			dateedited: 'January 14, 2012',
			likes: 100,
			comments: 200,
		},
	];

	const blogId = useParams().blogId;

	const blog = BLOGS.filter((blog) => blog.id === blogId);

	return (
		<MainBody title={props.title}>
			<BlogPost {...blog[0]} />
		</MainBody>
	);
};

export default Blog;

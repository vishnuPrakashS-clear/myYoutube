/* eslint-disable max-len */
import videoLinks from '../Data/videoLinks';
import thumbnails from '../Data/thumbnails';
import bestOfYt from '../Data/bestOfYt';
import beautyAndFashion from '../Data/beautyAndFashion';
import comedy from '../Data/comedy';
import cookingAndHealth from '../Data/cookingAndHealth';
import filmAndEnt from '../Data/filmAndEnt';
import gaming from '../Data/gaming';
import music from '../Data/music';
import sports from '../Data/sports';
import tech from '../Data/tech';

const config = {

	cardDetails: [
		{
			img: '/image/9.jpeg',
			video: videoLinks.v1,
			icon: '/channelIcon/2.jpeg',
			videoName: 'Best Youtube Thumbnail of 2022 ',
			channelName: 'Tamil TechLancer',
			views: '45K views',
			time: '1 year ago',
			id: 123,
			category: 'videoEditing',
		},
		{
			img: '/image/8.jpeg',
			video: videoLinks.v2,
			icon: '/channelIcon/1.jpeg',
			videoName: 'Make Professional Youtube Thumbnail ',
			channelName: 'Tamil TechLancer',
			views: '19K views',
			time: '5 days ago',
			id: 234,
			category: 'videoEditing',
		},
		{
			img: '/image/10.jpg',
			video: videoLinks.v3,
			icon: '/channelIcon/2.jpeg',
			videoName: 'Relax your mind',
			channelName: 'Isha',
			views: '78K views',
			time: '58 minutes ago',
			id: 345,
			category: 'Music',
		},
		{
			img: '/image/1.jpeg',
			video: videoLinks.v4,
			icon: '/channelIcon/1.jpeg',
			videoName: 'Six ways to Use Time Efficiently',
			channelName: 'TimeX',
			views: '58K views',
			time: '28 minutes ago',
			id: 456,
			category: 'Lifestyle',
		},
		{
			img: '/image/12.jpg',
			video: videoLinks.v5,
			icon: '/channelIcon/2.jpeg',
			videoName: 'Natural Beauty',
			channelName: 'MotherNature',
			views: '12K views',
			time: '8 hours ago',
			id: 567,
			category: 'Lifestyle',
		},
		{
			img: '/image/3.jpeg',
			video: videoLinks.v6,
			icon: '/channelIcon/3.jpeg',
			videoName: 'Master HTML and CSS ',
			channelName: 'AstroX',
			views: '18K views',
			time: '1 hour ago',
			id: 678,
			category: 'computerProgramming',
		},
		{
			img: '/image/4.jpeg',
			video: videoLinks.v7,
			icon: '/channelIcon/1.jpeg',
			videoName: 'Evergreen Songs 2022',
			channelName: 'Isaimini',
			views: '10K views',
			time: '6 hours ago',
			id: 789,
			category: 'Music',
		},
		{
			img: '/image/7.jpg',
			video: videoLinks.v8,
			icon: '/channelIcon/3.jpeg',
			videoName: '10 Best Windows Background',
			channelName: 'VP Tube',
			views: '2K views',
			time: '15 hours ago',
			id: 910,
			category: 'computerProgramming',
		},
		{
			img: '/image/11.jpg',
			video: videoLinks.v9,
			icon: '/channelIcon/3.jpeg',
			videoName: 'Best Youtube Thumbnail of 2022',
			channelName: 'Tamil TechLancer',
			views: '45K views',
			time: '1 year ago',
			id: 101,
			category: 'computerProgramming',
		},
		{
			img: thumbnails.gthumb1,
			video: videoLinks.gaming1,
			icon: '/channelIcon/3.jpeg',
			videoName: 'Intro to Game world',
			channelName: 'TTFGaming',
			views: '75K views',
			time: '4 year ago',
			id: 1,
			category: 'Gaming',
		},
		{
			img: thumbnails.gthumb2,
			video: videoLinks.gaming2,
			icon: '/channelIcon/1.jpeg',
			videoName: 'My daily Game Routine',
			channelName: 'JustBanana',
			views: '25K views',
			time: '2 year ago',
			id: 2,
			category: 'Gaming',
		},
		{
			img: thumbnails.gthumb3,
			video: videoLinks.gaming3,
			icon: '/channelIcon/2.jpeg',
			videoName: 'Tips to become MVP player',
			channelName: 'GamingTamil',
			views: '35K views',
			time: '1.5 year ago',
			id: 3,
			category: 'Gaming',
		},

		{
			img: thumbnails.gthumb4,
			video: videoLinks.gaming4,
			icon: '/channelIcon/3.jpeg',
			videoName: 'GameTime',
			channelName: 'PartTimeGamer',
			views: '45K views',
			time: '3 year ago',
			id: 4,
			category: 'Gaming',
		},

		{
			img: thumbnails.gthumb5,
			video: videoLinks.gaming5,
			icon: '/channelIcon/1.jpeg',
			videoName: 'How to stay ahead of Enemy',
			channelName: 'TamilTech',
			views: '55K views',
			time: '2.5 year ago',
			id: 5,
			category: 'Gaming',
		},

		{
			img: thumbnails.gthumb6,
			video: videoLinks.gaming6,
			icon: '/channelIcon/2.jpeg',
			videoName: 'Gaming Techniques',
			channelName: 'TamilTech',
			views: '65K views',
			time: '3.5 year ago',
			id: 6,
			category: 'Gaming',
		},

	],
	categories: [
		'All',
		'Gaming',
		'computerProgramming',
		'Music',
		'AI',
		'Gadgets',
		'Naruto',
		'Podcasts',
		'News',
		'Business',
		'videoEditing',
		'Sales',
		'Cinema',
		'Avengers',
		'Anime',
		'Attack on Titan',
		'Lifestyle',
	],

	videoMenu: [
		'Add to Queue',
		'Save to Watch later',
		'save to playlist',
		'Download',
		'Share',
	],

	browseCategories: [
		{
			title: 'Best of Youtube',
			collections: bestOfYt,
		},
		{
			title: 'Beauty and Fashion',
			collections: beautyAndFashion,
		},
		{
			title: 'Comedy',
			collections: comedy,
		},
		{
			title: 'Sports',
			collections: sports,
		},
		{
			title: 'Music',
			collections: music,
		},
		{
			title: 'Tech',
			collections: tech,
		},
		{
			title: 'Gaming',
			collections: gaming,
		},
		{
			title: 'Cooking and Health',
			collections: cookingAndHealth,
		},
		{
			title: 'Film and Entertainment',
			collections: filmAndEnt,
		},
	],

};

export default config;

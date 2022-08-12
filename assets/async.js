const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCEwl20VxZ3AwOgiKMZtI1GQ&part=snippet%2Cid&order=date&maxResults=10'

let content = document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2aa9c7e738mshe6fa807cc824fb5p1b35c2jsnab09bebde50b',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};


async function fetchData(urlApi){

    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async() =>{

    try {

        const videos = await fetchData(API);
        
        let view = ` ${videos.items.map(vids => `   
        
        <div class="group relative">
            <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${vids.snippet.thumbnails.high.url}" alt="" class="w-full">
            </div>

            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                    ${vids.snippet.title}
                </h3>
            </div>
        </div> ` 

).slice(0,4).join('')} `

content.innerHTML = view;

    } catch (error) {

        console.log(error)
        
    }

})();



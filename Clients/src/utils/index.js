import axios from "axios"


export const imageUploadBB = async(image) =>{
    const formData = new FormData()
    formData.append('image', image)

    const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY
        }`,
        formData
    )
    return data.data.display_url
}

export function cutWords(text, numWords) {
    // Split the text into an array of words
    const words = text.split(' ');

    // Use the slice method to get the desired number of words
    const selectedWords = words.slice(0, numWords);

    // Join the words back into a string
    return selectedWords.join(' ');
}
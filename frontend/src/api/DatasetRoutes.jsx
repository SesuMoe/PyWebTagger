import axios from "axios"
import {toRouteUrl} from "../util/ApiUtil";
import {Dataset} from "../models/Dataset";
import {DatasetImage} from "../models/DatasetImage";


const load_dataset = (path) => {
    const request = {path: path};

    return axios.get(toRouteUrl('load_dataset', request)).then(res => {
        console.log(res);
        console.log(res.data);
        return new Dataset(res.data.index, res.data.path, res.data.num_files);
    }).catch(err => {
        console.log(err.response);
        return undefined;
    });
}

const load_image = (index) => {
    const request = {index: index};

    return axios.get(toRouteUrl('load_image', request)).then(res => {
        console.log(res);
        return new DatasetImage(res.data.image, res.data.size, res.data.path, res.data.tags);
    }).catch(err => {
        console.log(err.response);
        return undefined;
    });
}

export {
    load_dataset,
    load_image
}
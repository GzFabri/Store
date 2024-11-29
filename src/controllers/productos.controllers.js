import { productos } from '../models/productos.js';


export const getproductos = async(request, response) => {
    try {
        const producto = await productos.findAll();
        response.status(200).json(producto);
    } catch (error) {
        response.status(400).json({error: 'Bad Request'});
    }
};

export const createproducto = async (request, response) => {  
    
    const {nombre, descripcion, cantidad} = request.body;

    const newproducto = await productos.create({
        nombre, 
        descripcion, 
        cantidad
    });

    response.status(201).json(newproducto);
};


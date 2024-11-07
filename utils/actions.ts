import db from '@/utils/db';

export const fetchFeaturedProducts = async () => {
    const products = await db.product.findMany({
        where: {
            features: true,
        },
        select:{
            name:true
        }
    });
    return products;
};

export const fetchAllProducts = () => {
    return db.product.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })
}
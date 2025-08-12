import { db, User, Product, Rating, Order, OrderItem, eq } from 'astro:db';
import { generateRandomId } from '@utils/generic';
import type { UserType, ProductType, RatingType, OrderType, OrderItemType } from '@utils/types';
import { encryptPassword } from '@utils/generic';

// Get all users from the database
export async function getAllUsers(): Promise<UserType[]> {
    return db.select().from(User).all();
}

// Create a new user
export async function createUser(user: UserType): Promise<void> {
    if (!user) {
        throw new Error("User is required");
    }
    user["password"] = await encryptPassword(user.password);
    if (!user.id) {
        // Generate a new ID if not provided
        user["id"] = generateRandomId();
    }
    // Insert new user into the database
    await db.insert(User).values(user).run();
}

// Create multiple users
export async function createUsers(users: UserType[]): Promise<void> {
    if (!Array.isArray(users) || users.length === 0) {
        throw new Error("There are no users to create!");
    }
    const hashedUsers = await Promise.all(users.map(async (user) => {
        user["password"] = await encryptPassword(user.password);
        if (!user.id) {
            user["id"] = generateRandomId();
        }
        return user;
    }));
    await db.insert(User).values(hashedUsers).run();
}

// Update user fields
export async function updateUser(user: UserType): Promise<void> {
    user["password"] = await encryptPassword(user.password);
    await db.update(User)
        .set(user)
        .where(eq(User.id, user.id))
        .run();
}

export async function getUserById(userId: string): Promise<UserType | null> {
    if (!userId) {
        throw new Error("User ID is required");
    }
    const user = await db.select().from(User).where(eq(User.id, userId)).get();
    return user === undefined ? null : user;
}

export async function getUserByEmail(email: string): Promise<UserType | null> {
    if (!email) {
        throw new Error("Email is required");
    }
    const user = await db.select().from(User).where(eq(User.email, email)).get();
    return user === undefined ? null : user;
}

// Get all products from the database
export async function getAllProducts(): Promise<ProductType[]> {
    return db.select().from(Product).all();
}

// Add a new product (must provide id)
export async function addProduct(product: ProductType): Promise<void> {
    if (!product.id) {
        product["id"] = generateRandomId();
    }
    await db.insert(Product)
    .values(product)
    .run();
}

export async function addProducts(products: ProductType[]): Promise<void> {
    if (!Array.isArray(products) || products.length === 0) {
        throw new Error("There are no products to create!");
    }
    products = products.map(product => {
        if (!product.id) {
            product["id"] = generateRandomId();
        }
        return product;
    });
    await db.insert(Product).values(products).run();
}

export async function deleteProduct(productId: string): Promise<void> {
    if (!productId) {
        throw new Error("Product ID is required");
    }
    await db.delete(Product).where(eq(Product.id, productId)).run();
}

export async function getProductById(productId: string): Promise<ProductType | null> {
    if (!productId) {
        throw new Error("Product ID is required");
    }
    const product = await db.select().from(Product).where(eq(Product.id, productId)).get();
    return product === undefined ? null : product;
}

export async function updateProduct(product: ProductType): Promise<void> {
    if (!product || !product.id) {
        throw new Error("Product ID is required");
    }
    await db.update(Product).set(product).where(eq(Product.id, product.id)).run();
}

// Get all ratings from the database
export async function getAllRatings(): Promise<RatingType[]> {
    return db.select().from(Rating).all();
}

export async function addRating(rating: RatingType): Promise<void> {
    if (!rating) {
        throw new Error("Rating is required");
    }
    if (!rating.id) {
        rating["id"] = generateRandomId();
    }
    await db.insert(Rating).values(rating).run();
}

export async function addRatings(ratings: RatingType[]): Promise<void> {
    if (!Array.isArray(ratings) || ratings.length === 0) {
        throw new Error("There are no ratings to create!");
    }
    ratings = ratings.map(rating => {
        if (!rating.id) {
            rating["id"] = generateRandomId();
        }
        return rating;
    });
    await db.insert(Rating).values(ratings).run();
}

export async function getRatingById(ratingId: string): Promise<RatingType | null> {
    if (!ratingId) {
        throw new Error("Rating ID is required");
    }
    const item = await db.select().from(Rating).where(eq(Rating.id, ratingId)).get();
    return item === undefined ? null : item;
}

export async function deleteRating(ratingId: string): Promise<void> {
    if (!ratingId) {
        throw new Error("Rating ID is required");
    }
    await db.delete(Rating).where(eq(Rating.id, ratingId)).run();
}

export async function updateRating(rating: RatingType): Promise<void> {
    if (!rating || !rating.id) {
        throw new Error("Rating ID is required");
    }
    await db.update(Rating).set(rating).where(eq(Rating.id, rating.id)).run();
}

// Get all orders from the database
export async function getAllOrders(): Promise<OrderType[]> {
    return db.select().from(Order).all();
}

export async function addOrder(order: OrderType): Promise<void> {
    if (!order) {
        throw new Error("There are no orders to create!");
    }
    if (!order.id) {
        order["id"] = generateRandomId();
    }
    await db.insert(Order).values(order).run();
}

export async function addOrders(orders: OrderType[]): Promise<void> {
    if (!Array.isArray(orders) || orders.length === 0) {
        throw new Error("There are no orders to create!");
    }
    orders = orders.map(order => {
        if (!order.id) {
            order["id"] = generateRandomId();
        }
        return order;
    });
    await db.insert(Order).values(orders).run();
}

export async function getOrderById(orderId: string): Promise<OrderType | null> {
    if (!orderId) {
        throw new Error("Order ID is required");
    }
    const item = await db.select().from(Order).where(eq(Order.id, orderId)).get();
    return item === undefined ? null : item;
}

export async function deleteOrder(orderId: string): Promise<void> {
    if (!orderId) {
        throw new Error("Order ID is required");
    }
    await db.delete(Order).where(eq(Order.id, orderId)).run();
}

export async function updateOrder(order: OrderType): Promise<void> {
    if (!order || !order.id) {
        throw new Error("Order ID is required");
    }
    await db.update(Order).set(order).where(eq(Order.id, order.id)).run();
}

// Get all order items from the database
export async function getAllOrderItems(): Promise<OrderItemType[]> {
    return db.select().from(OrderItem).all();
}

export async function addOrderItem(orderItem: OrderItemType): Promise<void> {
    if (!orderItem) {
        throw new Error("There are no order items to create!");
    }
    if (!orderItem.id) {
        orderItem["id"] = generateRandomId();
    }
    await db.insert(OrderItem).values(orderItem).run();
}

export async function addOrderItems(orderItems: OrderItemType[]): Promise<void> {
    if (!Array.isArray(orderItems) || orderItems.length === 0) {
        throw new Error("There are no order items to create!");
    }
    orderItems = orderItems.map(orderItem => {
        if (!orderItem.id) {
            orderItem["id"] = generateRandomId();
        }
        return orderItem;
    });
    await db.insert(OrderItem).values(orderItems).run();
}

export async function getOrderItemById(orderItemId: string): Promise<OrderItemType | null> {
    if (!orderItemId) {
        throw new Error("Order Item ID is required");
    }
    const item = await db.select().from(OrderItem).where(eq(OrderItem.id, orderItemId)).get();
    return item === undefined ? null : item;
}

export async function deleteOrderItem(orderItemId: string): Promise<void> {
    if (!orderItemId) {
        throw new Error("Order Item ID is required");
    }
    await db.delete(OrderItem).where(eq(OrderItem.id, orderItemId)).run();
}

export async function updateOrderItem(orderItem: OrderItemType): Promise<void> {
    if (!orderItem || !orderItem.id) {
        throw new Error("Order Item ID is required");
    }
    await db.update(OrderItem).set(orderItem).where(eq(OrderItem.id, orderItem.id)).run();
}

export async function getUserOrders(userId: string): Promise<OrderType[]> {
    if (!userId) {
        throw new Error("User ID is required");
    }
    return db.select().from(Order).where(eq(Order.userId, userId)).all();
}

export async function getOrderItems(orderId: string): Promise<OrderItemType[]> {
    if (!orderId) {
        throw new Error("Order ID is required");
    }
    return db.select().from(OrderItem).where(eq(OrderItem.orderId, orderId)).all();
}
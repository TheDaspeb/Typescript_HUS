import { User } from "../interfaces/Users";
import { Product, UserRole } from "../interfaces/products";

export const users: User[] = [
    {
        id: '1',
        fullName: 'Juan Pérez',
        email: 'juan.perez@example.com',
        isActive: true,
        role: 'admin',
        address: 'Calle 10 #20-30, Medellín',
        createdAt: new Date('2024-01-15'),
        description: 'Administrador principal del sistema'
    },
    {
        id: '2',
        fullName: 'María Gómez',
        email: 'maria.gomez@example.com',
        isActive: true,
        role: 'customer',
        address: 'Carrera 45 #50-12, Bogotá',
        createdAt: new Date('2024-02-10'),
        description: 'Usuaria frecuente de la plataforma'
    },
    {
        id: '3',
        fullName: 'Carlos Rodríguez',
        email: 'carlos.rodriguez@example.com',
        isActive: false,
        role: 'customer',
        address: 'Av. Siempre Viva 742, Cali',
        createdAt: new Date('2023-11-05'),
        description: 'User inactivo temporalmente'
    },
    {
        id: '4',
        fullName: 'Laura Fernández',
        email: 'laura.fernandez@example.com',
        isActive: true,
        role: 'customer',
        address: 'Calle 80 #15-22, Barranquilla',
        createdAt: new Date('2024-03-01'),
        description: 'Nueva usuaria registrada'
    },
    {
        id: '5',
        fullName: 'Andrés Martínez',
        email: 'andres.martinez@example.com',
        isActive: true,
        role: 'admin',
        address: 'Cra 7 #32-16, Medellín',
        createdAt: new Date('2024-01-25'),
        description: 'Encargado de revisar contenido'
    }
];

export const productos: Product[] = [
    {
        sku: 'SKU-001',
        name: 'Laptop Pro 14"',
        brand: 'TechBrand',
        quantity: 15,
        price: 1200,
        isActive: true,
        category: 'Electrónica',
        imageUrl: 'https://cotekcolombia.com/wp-content/uploads/2022/05/macbook-pro-14-gris-espacial.png',
        createdAt: new Date('2024-01-10'),
        despcription: 'Laptop de alto rendimiento'
    },
    {
        sku: 'SKU-002',
        name: 'Smartphone X',
        brand: 'MobileCorp',
        quantity: 30,
        price: 800,
        isActive: true,
        category: 'Electrónica',
        imageUrl: 'https://exitocol.vteximg.com.br/arquivos/ids/31221699/iphone-x-64gb-plata-reacondicionado.jpg?v=638957388564730000',
        createdAt: new Date('2024-02-05')
    },
    {
        sku: 'SKU-003',
        name: 'Audífonos inalámbricos',
        brand: 'SoundMax',
        quantity: 50,
        price: 150,
        isActive: true,
        category: 'Accesorios',
        imageUrl: 'https://www.ktronix.com/medias/6942103112225-001-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wzMzY2NHxpbWFnZS93ZWJwfGFEZGlMMmhqTmk4eE5ETTJOamt6Tnprd056SXpNQzgyT1RReU1UQXpNVEV5TWpJMVh6QXdNVjh4TkRBd1YzZ3hOREF3U0F8YmExNzQ0ZmJhNDllMzAzZWMxZGJlMWYzZWY1ODRkNGM4MGJlN2M4ZjkwZGNjZjg1NjgzNmE0YTQwMDhiYjZmYQ',
        createdAt: new Date('2024-03-12')
    },
    {
        sku: 'SKU-004',
        name: 'Teclado mecánico',
        brand: 'KeyPro',
        quantity: 20,
        price: 100,
        isActive: false,
        category: 'Periféricos',
        imageUrl: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/15973402/71sFaDtowqL._AC_SL1500_.jpg?1679019012',
        createdAt: new Date('2023-12-20')
    },
    {
        sku: 'SKU-005',
        name: 'Mouse gamer',
        brand: 'GameTech',
        quantity: 40,
        price: 60,
        isActive: true,
        category: 'Periféricos',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyKJSnTRL6qNkqqg8kQidZFRlAsDl49lHCTg&s',
        createdAt: new Date('2024-01-30')
    },
    {
        sku: 'SKU-006',
        name: 'Monitor 24"',
        brand: 'ViewTech',
        quantity: 18,
        price: 300,
        isActive: true,
        category: 'Electrónica',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgp3-Fs-2nJOE2L3rA3rNn8PaQSA0jCi41vA&s',
        createdAt: new Date('2024-02-15')
    },
    {
        sku: 'SKU-007',
        name: 'Tablet Plus',
        brand: 'TabWorld',
        quantity: 25,
        price: 450,
        isActive: true,
        category: 'Electrónica',
        imageUrl: 'https://media.falabella.com/falabellaCO/139001771_081/w=1500,h=1500,fit=cover',
        createdAt: new Date('2024-03-01')
    },
    {
        sku: 'SKU-008',
        name: 'Cámara digital',
        brand: 'PhotoSnap',
        quantity: 10,
        price: 900,
        isActive: false,
        category: 'Fotografía',
        imageUrl: 'https://eoatecnologia.com/cdn/shop/products/image5c5d4daa1c568.png?v=1658338962',
        createdAt: new Date('2023-11-10')
    },
    {
        sku: 'SKU-009',
        name: 'Impresora multifuncional',
        brand: 'PrintMax',
        quantity: 12,
        price: 250,
        isActive: true,
        category: 'Oficina',
        imageUrl: 'https://gruposuministros.co/3802/impresora-multifuncional-epson-ecotank-l3210.jpg',
        createdAt: new Date('2024-01-18')
    },
    {
        sku: 'SKU-010',
        name: 'Disco duro externo 1TB',
        brand: 'StoragePro',
        quantity: 35,
        price: 120,
        isActive: true,
        category: 'Almacenamiento',
        imageUrl: 'https://panamericana.vtexassets.com/arquivos/ids/481987/disco-duro-1tb-canvio-ready-toshiba-negro-2-723844000851.jpg?v=638120076704900000',
        createdAt: new Date('2024-02-22')
    },
    {
        sku: 'SKU-011',
        name: 'Memoria USB 64GB',
        brand: 'FlashTech',
        quantity: 60,
        price: 25,
        isActive: true,
        category: 'Almacenamiento',
        imageUrl: 'https://agaval.vtexassets.com/arquivos/ids/2196972-800-600?v=638694340277500000&width=800&height=600&aspect=true',
        createdAt: new Date('2024-03-05')
    },
    {
        sku: 'SKU-012',
        name: 'Silla ergonómica',
        brand: 'ComfortSeat',
        quantity: 14,
        price: 200,
        isActive: true,
        category: 'Oficina',
        imageUrl: 'https://exitocol.vtexassets.com/arquivos/ids/28308642/silla-de-oficina-gerencial-con-brazos-ajustables-en-altura-negro.jpg?v=638852761928070000',
        createdAt: new Date('2024-01-12')
    },
    {
        sku: 'SKU-013',
        name: 'Router WiFi 6',
        brand: 'NetFast',
        quantity: 22,
        price: 180,
        isActive: true,
        category: 'Redes',
        imageUrl: 'https://i.blogs.es/c04991/img-4/450_1000.jpeg',
        createdAt: new Date('2024-02-28')
    },
    {
        sku: 'SKU-014',
        name: 'Smartwatch Fit',
        brand: 'WearTech',
        quantity: 28,
        price: 220,
        isActive: true,
        category: 'Wearables',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDErsi6zlmPCWI4daKp0OwGfHRdU5IrRqekQ&s',
        createdAt: new Date('2024-03-08')
    },
    {
        sku: 'SKU-015',
        name: 'Altavoz Bluetooth',
        brand: 'SoundMax',
        quantity: 33,
        price: 90,
        isActive: true,
        category: 'Audio',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlmP2neQmrZLjBvhhJh4w-t-uKWda6S0mmXw&s',
        createdAt: new Date('2024-01-27')
    } 
];

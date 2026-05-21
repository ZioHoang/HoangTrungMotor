// Motorcycle data
const motorcycles = [
  {
    id: 1,
    name: "Honda CB650R",
    category: "Naked",
    price: "245.000.000",
    image: "images/honda-cb650r.jpg",
    specs: { power: "95 HP", engine: "649cc" },
    isNew: true,
    isFeatured: true,
  },
  {
    id: 2,
    name: "Honda CB500X",
    category: "Adventure",
    price: "188.000.000",
    image: "images/honda-cb500x.jpg",
    specs: { power: "47 HP", engine: "471cc" },
    isNew: true,
    isFeatured: false,
  },
  {
    id: 3,
    name: "Honda CBR1000RR",
    category: "Sport",
    price: "560.000.000",
    image: "images/honda-cbr1000rr.jpg",
    specs: { power: "189 HP", engine: "999cc" },
    isNew: true,
    isFeatured: true,
  },
  {
    id: 4,
    name: "Honda CB500 Hornet",
    category: "Naked",
    price: "175.000.000",
    image: "images/honda-cb500-hornet.jpg",
    specs: { power: "47 HP", engine: "471cc" },
    isNew: true,
    isFeatured: false,
  },
  {
    id: 5,
    name: "Ducati Streetfighter V4",
    category: "Naked",
    price: "890.000.000",
    image: "images/ducati-streetfighter-v4.jpg",
    specs: { power: "208 HP", engine: "1103cc" },
    isNew: false,
    isFeatured: true,
  },
  {
    id: 6,
    name: "BMW M1000R",
    category: "Naked",
    price: "920.000.000",
    image: "images/bmw-m1000r.jpg",
    specs: { power: "210 HP", engine: "999cc" },
    isNew: true,
    isFeatured: true,
  },
  {
    id: 7,
    name: "BMW S1000R",
    category: "Naked",
    price: "650.000.000",
    image: "images/bmw-s1000r.jpg",
    specs: { power: "165 HP", engine: "999cc" },
    isNew: false,
    isFeatured: false,
  },
  {
    id: 8,
    name: "Kawasaki Z1000",
    category: "Naked",
    price: "420.000.000",
    image: "images/kawasaki-z1000.jpg",
    specs: { power: "142 HP", engine: "1043cc" },
    isNew: false,
    isFeatured: true,
  },
  {
    id: 9,
    name: "Kawasaki Ninja H2R",
    category: "Sport",
    price: "1.900.000.000",
    image: "images/kawasaki-ninja-h2r.jpg",
    specs: { power: "310 HP", engine: "998cc" },
    isNew: false,
    isFeatured: true,
  },
  {
    id: 10,
    name: "Yamaha R1",
    category: "Sport",
    price: "680.000.000",
    image: "images/yamaha-r1.jpg",
    specs: { power: "200 HP", engine: "998cc" },
    isNew: true,
    isFeatured: true,
  },
  {
    id: 11,
    name: "Yamaha R6",
    category: "Sport",
    price: "420.000.000",
    image: "images/yamaha-r6.jpg",
    specs: { power: "118 HP", engine: "599cc" },
    isNew: false,
    isFeatured: false,
  },
  {
    id: 12,
    name: "Yamaha FZ7",
    category: "Naked",
    price: "220.000.000",
    image: "images/yamaha-fz7.jpg",
    specs: { power: "74 HP", engine: "689cc" },
    isNew: true,
    isFeatured: false,
  },
  {
    id: 13,
    name: "Kawasaki Ninja H2",
    category: "Sport",
    price: "1.200.000.000",
    image: "images/kawasaki-ninja-h2.jpg",
    specs: { power: "231 HP", engine: "998cc" },
    isNew: false,
    isFeatured: true,
  },
  {
    id: 14,
    name: "TVS Ronin 225",
    category: "Scrambler",
    price: "85.000.000",
    image: "images/tvs-ronin-225.jpg",
    specs: { power: "20 HP", engine: "225cc" },
    isNew: true,
    isFeatured: false,
  },
  {
    id: 15,
    name: "KTM RC 390",
    category: "Sport",
    price: "180.000.000",
    image: "images/ktm-rc390.jpg",
    specs: { power: "44 HP", engine: "373cc" },
    isNew: true,
    isFeatured: true,
  },
];

// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
const closeIcon = mobileMenuBtn.querySelector('.close-icon');
const productsGrid = document.getElementById('productsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const contactForm = document.getElementById('contactForm');
const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('active');
  menuIcon.style.display = isOpen ? 'none' : 'block';
  closeIcon.style.display = isOpen ? 'block' : 'none';
});

// Close mobile menu when clicking a link
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  });
});

// Render Products
function renderProducts(category = 'all') {
  const filteredProducts = category === 'all' 
    ? motorcycles 
    : motorcycles.filter(m => m.category === category);

  productsGrid.innerHTML = filteredProducts.map(motorcycle => `
    <div class="product-card" data-category="${motorcycle.category}">
      <div class="product-image">
        <img src="${motorcycle.image}" alt="${motorcycle.name}" loading="lazy">
        <div class="product-badges">
          ${motorcycle.isNew ? '<span class="badge badge-new">Mới</span>' : ''}
          ${motorcycle.isFeatured ? '<span class="badge badge-hot">Hot</span>' : ''}
        </div>
        <div class="product-actions">
          <button class="action-btn" aria-label="Yêu thích">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <button class="action-btn" aria-label="Xem nhanh">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
        </div>
      </div>
      <div class="product-content">
        <div class="product-meta">
          <span class="product-category">${motorcycle.category}</span>
          <div class="product-specs">
            <span>${motorcycle.specs.power}</span>
            <span>|</span>
            <span>${motorcycle.specs.engine}</span>
          </div>
        </div>
        <h3 class="product-name">${motorcycle.name}</h3>
        <div class="product-footer">
          <p class="product-price">${motorcycle.price} <span>VNĐ</span></p>
          <button class="product-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            Chi Tiết
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Filter Products
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Update active state
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    // Filter products
    const category = button.dataset.filter;
    renderProducts(category);
  });
});

// Contact Form Submit
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);
  
  // Here you would typically send the data to a server
  console.log('Form submitted:', data);
  alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.');
  contactForm.reset();
});

// Header scroll effect
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.style.backgroundColor = 'rgba(20, 20, 20, 0.95)';
  } else {
    header.style.backgroundColor = 'rgba(20, 20, 20, 0.8)';
  }
  
  lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = header.offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
});

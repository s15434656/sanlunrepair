function showBooking() {
    document.getElementById('bookingModal').classList.add('active');
}

function showPhone() {
    document.getElementById('phoneModal').classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

function bookService(serviceName) {
    const serviceSelect = document.getElementById('serviceSelect');
    if (serviceSelect) {
        const options = serviceSelect.options;
        for (let i = 0; i < options.length; i++) {
            if (options[i].value === serviceName) {
                serviceSelect.selectedIndex = i;
                break;
            }
        }
    }
    showBooking();
}

function submitBooking(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    const booking = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        district: formData.get('district'),
        address: formData.get('address'),
        service: formData.get('service'),
        description: formData.get('description'),
        time: formData.get('time'),
        timestamp: new Date().toISOString()
    };
    
    console.log('预约信息:', booking);
    
    localStorage.setItem('lastBooking', JSON.stringify(booking));
    
    closeModal('bookingModal');
    showSuccessModal();
    
    form.reset();
}

function showSuccessModal() {
    document.getElementById('successModal').classList.add('active');
}

function createServiceCard(service) {
    const bgColor = service.bgColor || categoryColors[service.category] || '#667eea';
    return `
        <div class="service-card" data-id="${service.id}">
            <div class="service-header">
                <div class="service-icon-small" style="background-color: ${bgColor}">
                    <span style="color: ${service.color || '#fff'}">${service.icon}</span>
                </div>
                <div class="service-info">
                    <h3>${service.name}</h3>
                    <span class="service-category">${service.categoryName}</span>
                </div>
            </div>
            <p class="service-description">${service.description}</p>
            <div class="service-footer">
                <div class="service-rating">
                    <span>⭐</span>
                    <span>${service.rating}</span>
                </div>
                <span class="service-users">${service.users} 用户</span>
            </div>
        </div>
    `;
}

function renderServices() {
    const toolsGrid = document.getElementById('toolsGrid');
    if (!toolsGrid || typeof aiTools === 'undefined') return;
    
    toolsGrid.innerHTML = aiTools.map(service => createServiceCard(service)).join('');
    
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        resultsCount.textContent = `共 ${aiTools.length} 个服务`;
    }
}

function setupFilters() {
    const searchInput = document.getElementById('toolSearchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    const resultsCount = document.getElementById('resultsCount');
    const toolsGrid = document.getElementById('toolsGrid');
    
    if (!toolsGrid || typeof aiTools === 'undefined') return;
    
    function filterAndRender() {
        let services = [...aiTools];
        
        if (searchInput && searchInput.value) {
            const query = searchInput.value.toLowerCase();
            services = services.filter(service => 
                service.name.toLowerCase().includes(query) ||
                service.description.toLowerCase().includes(query) ||
                service.categoryName.toLowerCase().includes(query)
            );
        }
        
        if (categoryFilter && categoryFilter.value !== 'all') {
            services = services.filter(service => service.category === categoryFilter.value);
        }
        
        if (sortFilter) {
            switch(sortFilter.value) {
                case 'popular':
                    services.sort((a, b) => {
                        const usersA = parseUsers(a.users);
                        const usersB = parseUsers(b.users);
                        return usersB - usersA;
                    });
                    break;
                case 'newest':
                    services.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
                    break;
                case 'rating':
                    services.sort((a, b) => b.rating - a.rating);
                    break;
            }
        }
        
        if (resultsCount) {
            resultsCount.textContent = `共 ${services.length} 个服务`;
        }
        
        toolsGrid.innerHTML = services.map(service => createServiceCard(service)).join('');
    }
    
    filterAndRender();
    
    if (searchInput) {
        searchInput.addEventListener('input', filterAndRender);
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterAndRender);
    }
    
    if (sortFilter) {
        sortFilter.addEventListener('change', filterAndRender);
    }
}

function parseUsers(usersStr) {
    const match = usersStr.match(/([\d.]+)(万|千|百)/);
    if (match) {
        const num = parseFloat(match[1]);
        const unit = match[2];
        if (unit === '万') {
            return num * 10000;
        } else if (unit === '千') {
            return num * 1000;
        } else if (unit === '百') {
            return num * 100;
        }
        return num;
    }
    return parseFloat(usersStr) || 0;
}

document.addEventListener('DOMContentLoaded', function() {
    renderServices();
    setupFilters();
    
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                modal.classList.remove('active');
            });
        }
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        } else {
            navbar.style.background = 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)';
        }
    }
});
# API Structure (Mock) – Chicoine Cookies

This is a future backend outline.  
AI should follow this structure when mocking data.

## Auth
POST /auth/register  
POST /auth/login  
POST /auth/logout  

## Products
GET /products  
GET /products/:id  

## Cart (local or server)
POST /cart/add  
POST /cart/update  
POST /cart/remove  

## Orders
GET /orders  
POST /orders  

## Subscriptions
GET /subscriptions  
POST /subscriptions  
POST /subscriptions/update  

## Reviews
GET /reviews  
POST /reviews (UI only)  

## Corporate Orders
POST /corporate-request  

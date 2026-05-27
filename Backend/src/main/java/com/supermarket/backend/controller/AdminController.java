package com.supermarket.backend.controller;

import com.supermarket.backend.model.Product;
import com.supermarket.backend.model.User;
import com.supermarket.backend.repository.ProductRepository;
import com.supermarket.backend.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "*") // Allows connection from the Next.js frontend
public class AdminController {

    private final ProductRepository productRepository;
    private final UserRepository userRepository;

    public AdminController(ProductRepository productRepository, UserRepository userRepository) {
        this.productRepository = productRepository;
        this.userRepository = userRepository;
    }

    // Helper method to simulate a simple role validation from headers
    private boolean isAdmin(String role) {
        return "ADMIN".equalsIgnoreCase(role);
    }

    /**
     * Endpoint for Admin to add a new product.
     * Accessible by sending a request header: X-User-Role: ADMIN
     */
    @PostMapping("/products")
    public ResponseEntity<?> addProduct(
            @RequestBody Product product,
            @RequestHeader(value = "X-User-Role", required = false) String role) {

        if (!isAdmin(role)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body("Access Denied: Only users with the ADMIN role can add products.");
        }

        if (product.getName() == null || product.getName().trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Product name is required.");
        }

        Product savedProduct = productRepository.save(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedProduct);
    }

    /**
     * Endpoint for Admin to see all users in the system.
     * Accessible by sending a request header: X-User-Role: ADMIN
     */
    @GetMapping("/users")
    public ResponseEntity<?> getAllUsers(
            @RequestHeader(value = "X-User-Role", required = false) String role) {

        if (!isAdmin(role)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body("Access Denied: Only users with the ADMIN role can view users.");
        }

        List<User> users = userRepository.findAll();
        return ResponseEntity.ok(users);
    }

    /**
     * Endpoint for Admin to view supermarket reports/statistics.
     * Accessible by sending a request header: X-User-Role: ADMIN
     */
    @GetMapping("/reports")
    public ResponseEntity<?> getReports(
            @RequestHeader(value = "X-User-Role", required = false) String role) {

        if (!isAdmin(role)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body("Access Denied: Only users with the ADMIN role can view reports.");
        }

        List<Product> products = productRepository.findAll();
        List<User> users = userRepository.findAll();

        long totalProducts = products.size();
        long totalUsers = users.size();
        long totalAdmins = users.stream().filter(u -> "ADMIN".equalsIgnoreCase(u.getRole())).count();
        long totalCustomers = totalUsers - totalAdmins;

        int totalStockQuantity = products.stream().mapToInt(Product::getQuantity).sum();
        double totalInventoryValue = products.stream()
                .mapToDouble(p -> p.getPrice() * p.getQuantity())
                .sum();

        // Round to two decimal places
        totalInventoryValue = Math.round(totalInventoryValue * 100.0) / 100.0;

        Map<String, Object> report = new HashMap<>();
        report.put("totalProducts", totalProducts);
        report.put("totalUsers", totalUsers);
        report.put("totalAdmins", totalAdmins);
        report.put("totalCustomers", totalCustomers);
        report.put("totalStockQuantity", totalStockQuantity);
        report.put("totalInventoryValue", totalInventoryValue);

        return ResponseEntity.ok(report);
    }
}

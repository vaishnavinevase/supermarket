package com.supermarket.backend.config;

import com.supermarket.backend.model.Product;
import com.supermarket.backend.model.User;
import com.supermarket.backend.repository.ProductRepository;
import com.supermarket.backend.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {

    private final UserRepository userRepository;
    private final ProductRepository productRepository;

    public DataSeeder(UserRepository userRepository, ProductRepository productRepository) {
        this.userRepository = userRepository;
        this.productRepository = productRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        seedAdminUser();
        seedSampleData();
    }

    private void seedAdminUser() {
        if (userRepository.findByName("admin").isEmpty()) {
            // Seeding the admin with name and pass (password) as requested
            User admin = new User();
            admin.setName("admin");
            admin.setPassword("adminpassword"); // Name and password only
            admin.setRole("ADMIN");
            userRepository.save(admin);
            System.out.println(">>> Admin user successfully seeded with username 'admin' and password 'adminpassword'");
        }
    }

    private void seedSampleData() {
        // Seed some sample users if empty (for the admin to see)
        if (userRepository.count() <= 1) {
            userRepository.save(new User("john_doe", "pass123", "USER"));
            userRepository.save(new User("jane_smith", "pass456", "USER"));
            System.out.println(">>> Sample users seeded.");
        }

        // Seed some sample products if empty (for the supermarket inventory)
        if (productRepository.count() == 0) {
            productRepository.save(new Product("Organic Apples", 2.99, 150, "Fresh organic red apples"));
            productRepository.save(new Product("Whole Milk 1L", 1.49, 80, "Pasteurized whole milk"));
            productRepository.save(new Product("Whole Wheat Bread", 2.49, 60, "Freshly baked brown wheat bread"));
            productRepository.save(new Product("Cheddar Cheese 200g", 3.99, 45, "Premium aged cheddar cheese"));
            System.out.println(">>> Sample supermarket products seeded.");
        }
    }
}

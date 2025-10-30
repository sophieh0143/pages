---
layout: post
title: "Submodule 3"
description: "Advanced Features and Optimization for Company Profile APIs"
permalink: /cs-portfolio-quest/data-viz/submodule_3/
parent: "Data Visualization"
team: "Applicators"
submodule: 3
categories: [CSP, Submodule, DataVisualization]
tags: [spring-boot, optimization, caching, async, rest]
author: "Applicators Team"
date: 2025-10-28
---

# Submodule 3 · Advanced Features & Optimization

Enhance the Company Profile system by adding **async processing**, **caching**, and **recommendation APIs**.  
Optimize data access and performance while maintaining clean architecture.

---

## 1. Add Async Processing

### Enable Async
```java
@SpringBootApplication
@EnableAsync
public class CompanyApplication {
  public static void main(String[] args) {
    SpringApplication.run(CompanyApplication.class, args);
  }
}
Async Service
java
Copy code
@Service
public class CompanyService {
  @Autowired private CompanyRepository repo;

  public Company createCompany(Company c) { return repo.save(c); }
  public Company getCompanyById(Long id) { return repo.findById(id).orElseThrow(); }
  public Company updateCompany(Long id, Company c){
    c.setId(id);
    return repo.save(c);
  }
  public void deleteCompany(Long id){ repo.deleteById(id); }

  @Async
  public CompletableFuture<Double> calculateMatchScore(Long id){
    try { Thread.sleep(3000); } catch(Exception e){}
    return CompletableFuture.completedFuture(Math.random());
  }
}
2. Add Caching with Spring Cache
Dependency
xml
Copy code
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-cache</artifactId>
</dependency>
Configuration
java
Copy code
@SpringBootApplication
@EnableCaching
public class CompanyApplication { ... }
Usage
java
Copy code
@Service
public class CachedCompanyService {
  @Autowired private CompanyRepository repo;

  @Cacheable("companies")
  public Company getCompany(Long id){
    System.out.println("Fetching from DB...");
    return repo.findById(id).orElseThrow();
  }

  @CacheEvict(value="companies", key="#id")
  public void deleteCompany(Long id){
    repo.deleteById(id);
  }
}
3. Recommendation API
Endpoint
java
Copy code
@RestController
@RequestMapping("/api/recommend")
public class RecommendationController {
  @Autowired private CompanyRepository repo;
  @Autowired private CompanyService service;

  @GetMapping("/{id}")
  public ResponseEntity<Map<String,Object>> recommend(@PathVariable Long id)
      throws Exception {
    CompletableFuture<Double> score = service.calculateMatchScore(id);
    Map<String,Object> result = new HashMap<>();
    result.put("status","processing");
    result.put("companyId", id);
    result.put("estimatedScore", score.get());
    return ResponseEntity.ok(result);
  }
}
4. DTO and Mapper Pattern
CompanyDTO.java
java
Copy code
public record CompanyDTO(Long id, String name, String industry,
                         String location, Integer size) {}
Mapper
java
Copy code
public class CompanyMapper {
  public static CompanyDTO toDTO(Company c){
    return new CompanyDTO(c.getId(), c.getName(),
      c.getIndustry(), c.getLocation(), c.getSize());
  }
}
5. Example GET Request Flow
Step	Action	Result
1	GET /api/companies/1	DB or cache fetch
2	GET /api/recommend/1	Async ML score
3	Response	JSON with company + score

6. Performance Tips
text
Copy code
- Use @Async for heavy I/O tasks.
- Cache static lookups (industries, roles).
- Return DTOs instead of entities.
- Log query times (spring.jpa.show-sql=true).
- Profile endpoints with Spring Boot Actuator.
7. Optional: Actuator for Monitoring
xml
Copy code
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
Access metrics:

bash
Copy code
GET /actuator/health  
GET /actuator/metrics
8. Checklist
Feature	Done
Async enabled & tested	
Caching configured	
Recommendation API working	
DTO mapping verified	
Actuator endpoints live
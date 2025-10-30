---
layout: post
title: "Submodule 2"
description: "Spring Boot RESTful Company Profile System"
permalink: /cs-portfolio-quest/data-viz/submodule_2/
parent: "Data Visualization"
team: "Applicators"
submodule: 2
categories: [CSP, Submodule, DataVisualization]
tags: [spring-boot, rest, jpa, sqlite]
author: "Applicators Team"
date: 2025-10-21
---

# Submodule 2 · Company Profile & REST APIs

Create a **Spring Boot + JPA** backend for managing company profiles with RESTful APIs.

---

## 1. Setup

### Dependencies (`pom.xml`)
```xml
<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
  </dependency>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
  </dependency>
  <dependency>
    <groupId>org.xerial</groupId>
    <artifactId>sqlite-jdbc</artifactId>
  </dependency>
</dependencies>
Config (application.properties)
properties
Copy code
spring.datasource.url=jdbc:sqlite:company_profiles.db
spring.datasource.driver-class-name=org.sqlite.JDBC
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
2. Entities
Company.java
java
Copy code
@Entity
@Table(name="companies")
public class Company {
  @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Long id;
  private String name, industry, location;
  private Integer size;

  @ManyToMany(cascade=CascadeType.ALL)
  @JoinTable(name="company_skills",
    joinColumns=@JoinColumn(name="company_id"),
    inverseJoinColumns=@JoinColumn(name="skill_id"))
  private Set<Skill> skills = new HashSet<>();

  @ManyToMany(cascade=CascadeType.ALL)
  @JoinTable(name="company_roles",
    joinColumns=@JoinColumn(name="company_id"),
    inverseJoinColumns=@JoinColumn(name="role_id"))
  private Set<Role> roles = new HashSet<>();
}
Skill.java
java
Copy code
@Entity
public class Skill {
  @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Long id;
  @Column(unique=true, nullable=false)
  private String name;
}
Role.java
java
Copy code
@Entity
public class Role {
  @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Long id;
  @Column(unique=true, nullable=false)
  private String title;
}
3. Repository
java
Copy code
@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {
  List<Company> findByIndustry(String industry);
  List<Company> findByLocation(String location);

  @Query("SELECT c FROM Company c JOIN c.skills s WHERE s.name=:skillName")
  List<Company> findBySkillName(@Param("skillName") String skillName);
}
4. Controller
java
Copy code
@RestController
@RequestMapping("/api/companies")
public class CompanyController {
  @Autowired private CompanyService service;

  @PostMapping
  public ResponseEntity<Company> create(@RequestBody Company c){
    return ResponseEntity.status(HttpStatus.CREATED)
           .body(service.createCompany(c));
  }

  @GetMapping("/{id}")
  public ResponseEntity<Company> get(@PathVariable Long id){
    return ResponseEntity.ok(service.getCompanyById(id));
  }

  @PutMapping("/{id}")
  public ResponseEntity<Company> update(@PathVariable Long id,
                                        @RequestBody Company c){
    return ResponseEntity.ok(service.updateCompany(id, c));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> delete(@PathVariable Long id){
    service.deleteCompany(id);
    return ResponseEntity.noContent().build();
  }
}
5. Test Endpoints
Method	Endpoint	Description
POST	/api/companies	Create company
GET	/api/companies/{id}	Fetch company
PUT	/api/companies/{id}	Update company
DELETE	/api/companies/{id}	Delete company

6. Optional Async Processing
java
Copy code
@Service
public class CompanyService {
  @Async
  public CompletableFuture<Double> calculateScore(Long id) {
    // heavy ML computation
    return CompletableFuture.completedFuture(Math.random());
  }
}
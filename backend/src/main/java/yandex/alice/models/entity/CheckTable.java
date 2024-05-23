package yandex.alice.models.entity;

import jakarta.persistence.*;
import lombok.*;
import yandex.alice.models.enums.SessionStatus;

import java.time.LocalDateTime;
import java.util.*;

@Entity
@Table(name = "check_table")
@EqualsAndHashCode(callSuper=false)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CheckTable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "number_table")
    private Integer numberTable;

    @OneToMany(cascade = { CascadeType.ALL },
               fetch = FetchType.EAGER, mappedBy = "check")
    private List<Order> orders = new ArrayList<>();

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "rest_id")
    private Restaurant restaurant;

    @Column(name = "cost")
    private Long cost = 0L;

    @Column(name = "session_status")
    private SessionStatus sessionStatus;

    @Column(name = "date_created")
    private LocalDateTime dateOfCreated;

    @PrePersist
    private void init() {
        dateOfCreated = LocalDateTime.now();
    }

    @Override
    public String toString() {
        return "Id: " + id + ", Date created: " + dateOfCreated;
    }
}
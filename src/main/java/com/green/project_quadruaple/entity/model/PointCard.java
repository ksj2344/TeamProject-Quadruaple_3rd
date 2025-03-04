package com.green.project_quadruaple.entity.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PointCard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "point_card_id",nullable = false, columnDefinition = "CHAR(10) DEFAULT 0")
    private Long pointCardId;

    @Column(nullable = false)
    private int available;

    @Column(nullable = false)
    private int discountPer;

    @Column(name = "final_payment", nullable = false)
    private int finalPayment;

}

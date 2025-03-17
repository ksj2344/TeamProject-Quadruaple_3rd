package com.green.project_quadruaple.strf.model;

import lombok.*;

import java.util.List;

@Getter
@Setter
@ToString
@EqualsAndHashCode
@Builder
public class StrfStayInsReq {
    private long strfId;
    private String busiNum;
    private String category;
    private long menuId;

    private List<Long> ameniPoints;
    private List<StrfParlor> parlors;
    private int rooms;
}

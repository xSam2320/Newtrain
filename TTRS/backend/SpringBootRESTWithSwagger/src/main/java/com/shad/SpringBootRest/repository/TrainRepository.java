package com.shad.SpringBootRest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shad.SpringBootRest.entity.Train;

@Repository
public interface TrainRepository extends JpaRepository<Train, Integer> {

	List<Train> findBySourceAndDestination(String source, String destination);

	

}

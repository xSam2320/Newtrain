package com.shad.SpringBootRest.controller;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shad.SpringBootRest.entity.Train;
import com.shad.SpringBootRest.service.TrainService;

@CrossOrigin(origins = "http://127.0.0.1:5501")
@RequestMapping("/api")
@RestController
public class TrainController {

	@Autowired
	private TrainService trainService;

	@PostMapping("/train")
	public Train saveTrain(@RequestBody Train train) {
		return trainService.saveTrain(train);

	}

	@PutMapping("/train")
	public Train updateTrain(@RequestBody Train train) {
		return trainService.updateTrain(train);

	}

	@DeleteMapping("/train/delete/{trainId}")
	public void deleteTrain(@PathVariable int trainId) {
		trainService.deleteTrain(trainId);

	}
	@GetMapping("/test")
	public String getmsg(){
		return "Welcome";
	}

	@GetMapping("/train/{trainId}")
	public Optional<Train> getTrainById(@PathVariable int trainId) {
		return trainService.getTrainById(trainId);

	}
	
	@GetMapping("/train/{source}/{destination}")
	public List<Train> getTrainBySourceAndDestination(@PathVariable String source, @PathVariable String destination) {
		return trainService.searchTrain(source,destination);

	}

	@GetMapping("/train")
	public List<Train> getAllTrains() {
		return trainService.getAllTrains();
	}

}
